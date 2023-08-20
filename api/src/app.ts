import express, { json } from "express";
import checkAuth from "./middlewares/checkAuth";
import cors from "cors";
import cookieParser from "cookie-parser";
import {
  authRouter,
  forgotPasswordRouter,
  keyRouter,
  resetPasswordRouter,
  userRouter,
} from "./routes";

const app = express();

// global middlewares
app.use(json());
app.use(cors());
app.use(cookieParser());

// routes

// public routes
app.use("/auth", authRouter);
app.use("/forgotPassword", forgotPasswordRouter);

// private routes
app.use("/user", userRouter);
app.use("/resetPassword", resetPasswordRouter);
app.use("/key", keyRouter);

export default app;
