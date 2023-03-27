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

  if (type === 'INVALID_NAME') {
    return res.status(400).json({ message });
  }

  if (type === 'INVALID_LENGTH') {
    return res.status(422).json({ message });
  }
  return res.status(201).json(message);
};

const deleteProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    await productsServices.deleteProducts(id);
    res.status(204).json();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getProducts,
  getProductsId,
  createProducts,
  deleteProducts,
};