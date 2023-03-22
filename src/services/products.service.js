const productsModel = require('../models/products.model');

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

module.exports = {
  getProducts,
  getProductsId,
  
};