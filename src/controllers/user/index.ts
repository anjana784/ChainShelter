import type { RequestHandler } from "express";
import User from "./../../models/user";
import dbConnect from "./../../utils/dbConnect";
import errorHandler from "./../../middlewares/errorHandler";
import AppError from "./../../models/appError";
import * as bcrypt from "bcrypt";
import sendEmail from "./../../utils/sendEmail";

export const createUser: RequestHandler = async (req, res) => {
  // get the data from the request body
  const { name, email, mobile, password, role } = req.body;

  // get the users collection
  const { client, usersCollection } = await dbConnect();

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

    // close the connection to the database
    client.close();

    // send a welcome email
    await sendEmail(
      email,
      "Welcome to the Tailor Shop",
      "Welcome to the Tailor Shop"
    );

    // return 201 and the user object
    res.status(201).json({ user });
  }
};

export const getUsers: RequestHandler = async (req, res) => {
  // get the users collection
  const { client, usersCollection } = await dbConnect();

  // get all the users
  const users = await usersCollection.find().toArray();

  // close the connection to the database
  client.close();

  // return 200 and the users array
  res.status(200).json({ users });
};
