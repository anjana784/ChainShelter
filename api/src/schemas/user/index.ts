import { body } from "express-validator";

const userSchema = [
  body("username").notEmpty().withMessage("name cannot be empty"),
  body("email")
    .notEmpty()
    .withMessage("email cannot be empty")
    .trim()
    .isEmail()
    .withMessage("invalid email address"),
  body("password")
    .notEmpty()
    .withMessage("password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("password must be at least 6 characters long")
    .matches(/^(?=.*[a-z])(?=.*[0-9])/)
    .withMessage("password must contain at least one numeric digit"),
];

export default userSchema;
