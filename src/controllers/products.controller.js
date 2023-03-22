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

module.exports = {
  getProducts,
  getProductsId,
};