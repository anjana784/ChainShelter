import { Router } from "express";
import { createUser } from "./../../controllers/user";

const userRouter = Router();

userRouter
  .get("/")
  .post("/", createUser)
  .get("/:id")
  .put("/:id")
  .delete("/:id");

export default userRouter;
