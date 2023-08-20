import { Router } from "express";
import { forgotPassword } from "./../../controllers/forgotPassword";

const forgotPasswordRouter = Router();

/**
 * @route POST /api/forgotPassword
 */
forgotPasswordRouter.post("/forgotPassword", forgotPassword);

export default forgotPasswordRouter;
