const express = require('express');

const { validateNewSaleProduct } = require('../middlewares/validationSales');

const salesController = require('../controllers/sales.controller');

const router = express.Router();

router.post('/', validateNewSaleProduct, salesController.createManyProducts);

module.exports = router;