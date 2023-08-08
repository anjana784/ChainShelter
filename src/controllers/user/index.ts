import type { RequestHandler } from "express";
import User from "../../models/User";
import dbConnect from "./../../utils/dbConnect";
import errorHandler from "./../../middlewares/errorHandler";
import AppError from "./../../models/AppError";

export const createUser: RequestHandler = async (req, res) => {
  // get the data from the request body
  const { name, email, mobile, password, role } = req.body;

  // get the users collection
  const { usersCollection } = await dbConnect();

  // check if the user already exists
  const existingUser = await usersCollection.findOne({ email });

  // if the user exists, return an error
  if (existingUser) {
    errorHandler(
      new AppError(400, {
        type: "Bad Request",
        message: "User already exists",
      }),
      req,
      res
    );
  } else {
    // create a new user
    const user = new User(name, email, mobile, password, role);

    // save the user to the database
    await usersCollection.insertOne(user);

    res.status(201).json({ user });
  }
};
