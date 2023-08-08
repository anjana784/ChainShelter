import { Router } from "express";
import { createUser, getUsers } from "./../../controllers/user";
import validateRequestSchema from "./../../middlewares/validateRequestSchema";
import userSchema from "./../../schemas/user";

const userRouter = Router();

userRouter
  .get("/", getUsers)
  .post("/", userSchema, validateRequestSchema, createUser)
  .get("/:id")
  .put("/:id")
  .delete("/:id");

export default userRouter;
