import { Router } from "express";
import { getUser, editUser } from "./../../controllers/user";

const userRouter = Router();

userRouter.get("/:id").put("/:id");

export default userRouter;
