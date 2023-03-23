const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const addProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
});

const saleSchema = Joi.object({
  productId: Joi.number().required().label('productId'),
  quantity: Joi.number().min(1).required().label('quantity'),
}).messages({
  'any.required': '{{#label}} is required',
  'any.min': '{{#label}} must be greater than or equal to {{#limit}}',
});

module.exports = {
  idSchema,
  addProductSchema,
  saleSchema,
};