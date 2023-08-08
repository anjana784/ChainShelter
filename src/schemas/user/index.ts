import { body } from "express-validator";

const userSchema = [
  body("name").notEmpty().withMessage("name cannot be empty"),
  body("email")
    .notEmpty()
    .withMessage("email cannot be empty")
    .trim()
    .isEmail()
    .withMessage("invalid email address"),
  body("mobile")
    .notEmpty()
    .withMessage("mobile cannot be empty")
    .matches(/^[0-9]{10}$/)
    .withMessage("invalid mobile number"),
  body("password")
    .notEmpty()
    .withMessage("password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("password must be at least 6 characters long")
    .matches(/^(?=.*[a-z])(?=.*[0-9])/)
    .withMessage("password must contain at least one numeric digit"),
  body("role")
    .notEmpty()
    .withMessage("role cannot be empty")
    .isIn(["admin", "sales", "tailor"])
    .withMessage("invalid role"),
];

export default userSchema;
