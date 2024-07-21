import Joi from "joi";

const name = Joi.string().min(3);
const last_name = Joi.string().min(3);
const phone_number = Joi.string().min(10).max(15);
const email = Joi.string().email().message("Invalid format");
const password = Joi.string().min(8).max(100);

export const registerSchema = Joi.object({
  name: name.required(),
  last_name: last_name.required(),
  phone_number: phone_number,
  email: email.required(),
  password: password.required(),
});
