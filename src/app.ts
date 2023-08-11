import express, { json } from "express";
import userRouter from "./routes/user";
import authRouter from "./routes/auth";
import checkAuth from "./middlewares/checkAuth";

const app = express();

// global middleware
app.use(json());

// routes

// public routes
app.use("/auth", authRouter);
app.get("/", (req, res) => {
  res.send("Hello World");
});

// protected routes
app.use(checkAuth);
app.use("/user", userRouter);

export default app;
