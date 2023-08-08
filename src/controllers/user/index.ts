import type { RequestHandler } from "express";
import User from "../../models/User";
import dbConnect from "./../../utils/dbConnect";
import errorHandler from "./../../middlewares/errorHandler";
import AppError from "./../../models/AppError";
import * as bcrypt from "bcrypt";

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
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 12);
    // create a new user
    const user = new User(name, email, mobile, hashedPassword, role);

    // save the user to the database
    await usersCollection.insertOne(user);

    // return 201 and the user object
    res.status(201).json({ user });
  }
};
