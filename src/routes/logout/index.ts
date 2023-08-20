import { Router } from "express";
import { logout } from "./../../controllers/logout";

const logoutRouter = Router();

/**
 * @route POST /api/logout
 * @descrition Logs out the current logged in user
 * @access Private
 */
logoutRouter.post("/logout");

export default logoutRouter;
