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

// protected routes
app.use(checkAuth);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
