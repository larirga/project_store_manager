const Joi = require('joi');
const schema = require('../validations/schema');

const salesModel = require('../models/sales.model');

const httpErrGenerator = (status, message) => ({ status, message });

const createManyProducts = async (salesArray) => {
  const salesArraySchema = Joi.array().items(schema.saleSchema);

  const { error } = salesArraySchema.validate(salesArray);

  if (error) {
    throw httpErrGenerator(404, 'Product not found');
  }
  const saleId = await salesModel.createSale();

  const newSalesPromises = salesArray
    .map((product) => salesModel.createSaleProduct(saleId, product));
  
  const newSalesResolve = await Promise.all(newSalesPromises);

  // const newSales = { id: newSalesResolve, itemSold: [{ ...salesArray }] };

  const newSales = { id: newSalesResolve[0], itemSold: [...salesArray] };
  return newSales;
};

module.exports = {
  createManyProducts,
};