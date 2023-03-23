const salesService = require('../services/sales.service');

const createManyProducts = async (req, res, next) => {
  try {
    const sales = req.body;
    const newSales = await salesService.createManyProducts(sales);
    res.status(201).json(newSales);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createManyProducts,
};