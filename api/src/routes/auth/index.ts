import { Router } from "express";
import { login, register } from "./../../controllers/auth";
import loginSchema from "./../../schemas/login";
import validateRequestSchema from "./../../middlewares/validateRequestSchema";
import userSchema from "./../../schemas/user";

const authRouter = Router();

/**
 * @route POST /api/auth/login
 * @route POST /api/auth/register
 */
authRouter
  .post("/login", loginSchema, validateRequestSchema, login)
  .post("/register", userSchema, validateRequestSchema, register);

export default authRouter;
