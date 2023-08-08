import express, { json } from "express";
import userRouter from "./routes/user";

const app = express();

// global middleware
app.use(json());

// routes
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
