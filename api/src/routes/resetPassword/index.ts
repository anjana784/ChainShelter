import { Router } from "express";
import { resetPassword } from "./../../controllers/resetPassword";

const resetPasswordRouter = Router();

/**
 * @route POST /api/resetPassword
 */
resetPasswordRouter.post("/resetPassword", resetPassword);

export default resetPasswordRouter;
