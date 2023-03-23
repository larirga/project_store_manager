const productsModel = require('../models/products.model');
const validationsInputValues = require('../validations/validationsInputValues');

const httpErrGenerator = (status, message) => ({ status, message });

const getProducts = async () => {
  const products = await productsModel.getProducts();
  return products;
};

const getProductsId = async (id) => {
  const products = await productsModel.getProductsId(id);
  if (!products) {
    throw httpErrGenerator(404, 'Product not found');
  }
  return products;
};

const insert = async (name) => {
  const error = await validationsInputValues.validateNewProduct(name);
  if (error.type) return error;

  const newProductsId = await productsModel.insert({ name });
  const newProducts = await productsModel.getProductsId(newProductsId);
  
  return { type: null, message: newProducts };
};

module.exports = {
  getProducts,
  getProductsId,
  insert,
};