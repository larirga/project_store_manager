const validateNewSaleProduct = (req, res, next) => {
  const allProducts = req.body;
  
  const someProducts = allProducts.some((product) => !product.productId);
  const someQuantity = allProducts.some((quantitys) => !quantitys.quantity);
  const quantityNumber = allProducts.some((quantitys) => quantitys.quantity < 1);

  if (quantityNumber) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  if (someProducts) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  if (someQuantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  next();
};

module.exports = {
  validateNewSaleProduct,
  // validateSaleDb,
};