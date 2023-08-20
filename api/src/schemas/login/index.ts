import { body } from "express-validator";

const loginSchema = [
  body("email")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Invalid email address"),
  body("password").notEmpty().withMessage("Password cannot be empty"),
];

export default loginSchema;
