const connection = require('./connection.model');

const createSale = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';

  const [{ insertId }] = await connection.execute(query);

  return insertId;
};

const createSaleProduct = async ({ id, productId, quantity }) => {
  console.log(id, productId, quantity);
  // console.log(id, productId, quantity);
  const query = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
  VALUES (?, ?, ?)`;

  const [newSales] = await connection.execute(query, [id, productId, quantity]);

  // console.log(newSales);

  return newSales;
};

module.exports = {
  createSale,
  createSaleProduct,
};