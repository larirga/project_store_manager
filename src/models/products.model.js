const connection = require('./connection.model');

const getProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const products = connection.execute(query);
  return products;
};

const getProductsId = async (id) => {
  console.log(id);
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [[product]] = await connection.execute(query, [id]);
  return product;
};

const insert = async (name) => {
  const column = Object.keys(name).join(', ');

  const placeholder = Object.keys(name)
    .map((_item) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.products (${column}) VALUE (${placeholder})`,
    [...Object.values(name)],
  );
  return insertId;
};

module.exports = {
  getProducts,
  getProductsId,
  insert,
};