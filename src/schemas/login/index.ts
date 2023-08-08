import { body } from "express-validator";

const loginSchema = [
  body("email")
    .notEmpty()
    .withMessage("email cannot be empty")
    .isEmail()
    .withMessage("invalid email address"),
  body("password").notEmpty().withMessage("password cannot be empty"),
];

export default loginSchema;
