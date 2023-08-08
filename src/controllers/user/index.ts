import type { RequestHandler } from "express";
import User from "./../../models/user";

export const createUser: RequestHandler = (req, res) => {
  const { name, email, mobile, password, role } = req.body;
  const user = new User(name, email, mobile, password, role);
  res.status(201).json({ user });
};
