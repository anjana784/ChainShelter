import { Router } from "express";
import { login } from "./../../controllers/auth";
import loginSchema from "./../../schemas/login";
import validateRequestSchema from "./../../middlewares/validateRequestSchema";

const authRouter = Router();

authRouter.post("/login", loginSchema, validateRequestSchema, login);

export default authRouter;
