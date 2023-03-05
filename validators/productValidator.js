import Joi from 'joi';

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    size: Joi.string().required(),
    image: Joi.string(),
}).keys({
    image: Joi.string().allow(null, '')
});

export default productSchema;

