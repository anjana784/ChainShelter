import { Router } from "express";
import { createUser } from "./../../controllers/user";
import validateRequestSchema from "./../../middlewares/validateRequestSchema";
import userSchema from "./../../schemas/user";

const userRouter = Router();

userRouter
  .get("/")
  .post("/", userSchema, validateRequestSchema, createUser)
  .get("/:id")
  .put("/:id")
  .delete("/:id");

export default userRouter;
