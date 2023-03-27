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

const getSales = async () => {
  const query = `SELECT id AS saleId, date, product_id AS productId, quantity
  FROM StoreManager.sales INNER JOIN StoreManager.sales_products
  ON id = sale_id`;
  const [sales] = await connection.execute(query);
  return sales;
};

const findIdSale = async (id) => {
  const query = 'SELECT * FROM StoreManager.sales WHERE id = ?';
  const [[sales]] = await connection.execute(query, [id]);
  return sales;
};

const getSaleId = async (id) => {
  const query = `SELECT date, product_id AS productId, quantity
  FROM StoreManager.sales INNER JOIN StoreManager.sales_products
  ON id = sale_id
  WHERE id = ?`;
  const [sales] = await connection.execute(query, [id]);
  return sales;
};
  
module.exports = {
  createSale,
  createSaleProduct,
  getSales,
  findIdSale,
  getSaleId,
};