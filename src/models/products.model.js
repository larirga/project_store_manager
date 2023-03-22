const connection = require('./connection.model');

const getProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const products = connection.execute(query);
  return products;
};

const getProductsId = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [[product]] = await connection.execute(query, [id]);
  return product;
};

module.exports = {
  getProducts,
  getProductsId,
};