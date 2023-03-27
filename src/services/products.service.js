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

const updateProducts = async (id, name) => {
  const error = await validationsInputValues.validateNewProduct(name);

  if (error.type) return error;

  const product = await productsModel.getProductsId(id);

  if (!product) {
        throw httpErrGenerator(404, 'Product not found');
  }

  await productsModel.updateProducts(id, name);
  const newProduct = { message: { id, name } };

  return newProduct;
};

const deleteProducts = async (id) => {
  const product = await productsModel.getProductsId(id);
  if (!product) {
    throw httpErrGenerator(404, 'Product not found');
  }
  await productsModel.deleteProducts(id);
};

module.exports = {
  getProducts,
  getProductsId,
  insert,
  deleteProducts,
  updateProducts,
};