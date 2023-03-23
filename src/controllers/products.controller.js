const productsServices = require('../services/products.service');

const getProducts = async (req, res, next) => {
  try { 
  const [products] = await productsServices.getProducts();
  res.status(200).json(products);
  } catch (e) {
    next(e);
  }
};

const getProductsId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const productId = await productsServices.getProductsId(id);
    res.status(200).json(productId);
  } catch (e) {
    next(e);
  }
};

const createProducts = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsServices.insert(name);
  if (type) {
    return res.status(404).json({ message });
  }
  return res.status(201).json(message);
};

module.exports = {
  getProducts,
  getProductsId,
  createProducts,
};