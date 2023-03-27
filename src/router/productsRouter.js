const express = require('express');

const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productsController.getProducts);

router.get('/:id', productsController.getProductsId);

router.post('/', productsController.createProducts);

router.delete('/:id', productsController.deleteProducts);

module.exports = router;