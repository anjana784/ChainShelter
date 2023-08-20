import { Router } from "express";
import { getUser, editUser } from "./../../controllers/user";

const userRouter = Router();

/**
 * @route GET /api/user (get current logged in user)
 * @route PUT /api/user (edit current logged in user)
 */
userRouter.get("/:id").put("/:id");

export default userRouter;
