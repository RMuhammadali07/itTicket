const Joi = require("joi");

const validateTicket_type = (ticket_type) => {
  const schema = Joi.object({
    color: Joi.string().required(),
    name: Joi.string().required(),
    tickets: Joi.string().required(),
  });

  return schema.validate(ticket_type);
};
module.exports = { validateTicket_type };
