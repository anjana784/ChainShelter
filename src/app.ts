import express, { json } from "express";
import userRouter from "./routes/user";
import authRouter from "./routes/auth";

const app = express();

// global middleware
app.use(json());

// routes
app.use("/auth", authRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
