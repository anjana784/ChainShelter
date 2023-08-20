import express, { json } from "express";
import userRouter from "./routes/user";
import authRouter from "./routes/auth";
import checkAuth from "./middlewares/checkAuth";
import cors from "cors";
import cookieParser from "cookie-parser";
import resetPasswordRouter from "./routes/resetPassword";
import forgotPasswordRouter from "./routes/forgotPassword";

const app = express();

/**
 * @global_middlewares
 */
app.use(json());
app.use(cors());
app.use(cookieParser());

/**
 * @routes
 */

/**
 * @public_routes
 */
app.use("/auth", authRouter);
app.use("/forgotPassword", forgotPasswordRouter);

/**
 * @protected_routes
 */
// app.use(checkAuth);
app.use("/user", userRouter);
app.use("/resetPassword", resetPasswordRouter);

export default app;
