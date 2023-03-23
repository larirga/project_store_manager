const connection = require('./connection.model');

const createSale = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';

  const [newSales] = await connection.execute(query);

  return newSales.insertId;
};

const createSaleProduct = async (id, { productId, quantity }) => {
  // console.log(id, productId, quantity);
  const query = `INSERT INTO StoreManager.sales_products ( product_id, sale_id, quantity)
  VALUES (?, ?, ?)`;

  const [newSales] = await connection.execute(query, [productId, id, quantity]);

  // console.log(newSales);

  return newSales.affectedRows;
};

module.exports = {
  createSale,
  createSaleProduct,
};