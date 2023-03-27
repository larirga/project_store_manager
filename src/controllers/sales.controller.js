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

const getSales = async (req, res, next) => {
  try { 
  const sales = await salesService.getSales();
  res.status(200).json(sales);
  } catch (e) {
    next(e);
  }
};

const getSaleId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await salesService.getSaleId(id);
    res.status(200).json(sale);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createManyProducts,
  getSales,
  getSaleId,
};