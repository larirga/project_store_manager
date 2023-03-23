const schema = require('./schema');

const validateIdProduct = (id) => {
  const { error } = schema.idSchema.validate(id);
  if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };
  
  return { type: null, message: '' };
};

const validateNewProduct = (name) => {
  const { error } = schema.addProductSchema
    .validate({ name });

  if (error) {
    return { type: 'INVALID_NAME', message: '"name" is required' };
  }

  if (name.length < 5) {
    return {
      type: 'INVALID_LENGTH',
      message: '"name" length must be at least 5 characters long',
    };
  }
      return { type: null, message: '' };
};

module.exports = {
  validateIdProduct,
  validateNewProduct,
};