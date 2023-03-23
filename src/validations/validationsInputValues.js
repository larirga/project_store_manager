const schema = require('./schema');

const validateIdProduct = (id) => {
  const { error } = schema.idSchema.validate(id);
  if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };
  
  return { type: null, message: '' };
};

const validateNewProduct = (name) => {
  const { error } = schema.addProductSchema
    .validate({ name });
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  
  return { type: null, message: '' };
};

module.exports = {
  validateIdProduct,
  validateNewProduct,
};