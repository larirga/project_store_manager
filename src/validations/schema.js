const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const addProductSchema = Joi.object({
  name: Joi.string().required(),
});

const saleSchema = Joi.object({
  productId: Joi.number().required().label('productId'),
  quantity: Joi.number().min(1).required().label('quantity'),
}).messages({
  'any.required': '{{#label}} is required',
  'string.min': '{{#label}} must be greater than or equal to {{#limit}}',
});

module.exports = {
  idSchema,
  addProductSchema,
  saleSchema,
};