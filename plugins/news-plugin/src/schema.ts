import Joi from 'joi';

export const newsSchema = Joi.object({
  layout: Joi.string().optional(),
  title: Joi.string().optional(),
  date: Joi.alternatives().try(
    Joi.date(),
    Joi.string()
  ).required(),
  inline: Joi.boolean().optional(),
  related_posts: Joi.boolean().optional(),
  images: Joi.object({
    slider: Joi.boolean().optional()
  }).optional()
}).unknown(true);
