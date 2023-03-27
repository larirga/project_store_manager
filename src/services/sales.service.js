const Joi = require('joi');
const schema = require('../validations/schema');

const salesModel = require('../models/sales.model');
const productsModel = require('../models/products.model');

const httpErrGenerator = (status, message) => ({ status, message });

const createManyProducts = async (salesArray) => {
  const salesArraySchema = Joi.array().items(schema.saleSchema);

  const { error } = salesArraySchema.validate(salesArray);

  if (error) {
    throw httpErrGenerator(404, 'Product not found');
  }

  const productId = await Promise.all(salesArray
    .map((sale) => productsModel.getProductsId(sale.productId)));
  
  const productIdInvalid = productId.some((product) => product === undefined);
  // console.log(productIdInvalid);
  if (productIdInvalid) {
    throw httpErrGenerator(404, 'Product not found');
  }

  const saleId = await salesModel.createSale();

  const newSalesPromises = salesArray
    .map((product) => salesModel.createSaleProduct({ id: saleId, ...product }));
  
    await Promise.all(newSalesPromises);

  const newSales = { id: saleId, itemsSold: salesArray };
  return newSales;
};

const getSales = async () => {
  const sales = await salesModel.getSales();
  return sales;
};

const getSaleId = async (id) => {
  const idValid = await salesModel.findIdSale(id);
  if (!idValid) throw httpErrGenerator(404, 'Sale not found');

  const saleById = await salesModel.getSaleId(id);
  return saleById;
};

module.exports = {
  createManyProducts,
  getSales,
  getSaleId,
};