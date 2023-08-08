import { Router } from "express";
import { createUser } from "./../../controllers/user";
import validateRequestSchema from "./../../middlewares/validateRequestSchema";
import { body } from "express-validator";

const userRouter = Router();

userRouter
  .get("/")
  .post(
    "/",
    body("email").notEmpty().withMessage("email cannot be empty"),
    validateRequestSchema,
    createUser
  )
  .get("/:id")
  .put("/:id")
  .delete("/:id");

export default userRouter;
