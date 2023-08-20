import type { RequestHandler } from "express";
import dbConnect from "./../../utils/dbConnect";
import errorHandler from "./../../middlewares/errorHandler";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import sendEmail from "./../../utils/sendEmail";

/**
 * @controller POST /api/register
 * @access Public
 * @description Register a user
 */
export const register: RequestHandler = async (req, res) => {
  // get the username, email and password from the request body
  const { username, email, password } = req.body;

  // get the users collection
  const { client, usersCollection } = await dbConnect();

  // check if the user exists
  const user = await usersCollection.findOne({ email });

  // check if the user exists
  if (user) {
    // if the user exists,

    // close the connection to the database
    await client.close();

    // return an error
    errorHandler(
      {
        statusCode: 400,
        type: "Bad Request",
        message: "User already exists",
      },
      req,
      res
    );
  } else {
    // if the user does not exist,

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // create a new user
    const newUser = {
      username,
      email,
      password: hashedPassword,
    };

    // insert the new user into the database
    const result = await usersCollection.insertOne(newUser);

    // close the connection to the database
    await client.close();

    // create a token
    const token = jwt.sign(
      { id: result.insertedId, role: "user" },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // set the token in the cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
    });

    // return 201 and user
    res.status(201).json({
      status: "success",
      data: {
        message: "User registered successfully",
        user: {
          id: result.insertedId,
          username,
          email,
        },
      },
    });

    // send a welcome email
    await sendEmail(
      email,
      "Welcome to the Tailor Shop",
      "<h1>Welcome to the Tailor Shop</h1>"
    );
  }
};

/**
 * @controller POST /api/login
 * @access Public
 * @description Login a user
 */
export const login: RequestHandler = async (req, res) => {
  // get the email and password from the request body
  const { email, password } = req.body;

  // get the users collection
  const { client, usersCollection } = await dbConnect();

  // check if the user exists
  const user = await usersCollection.findOne({ email });

  // close the connection to the database
  await client.close();

  // check if the user exists
  if (!user) {
    // if the user does not exist, return an error
    errorHandler(
      {
        statusCode: 400,
        type: "Bad Request",
        message: "User does not exist",
      },
      req,
      res
    );
  } else {
    // if the user exists, check if the password is correct

    // get the hashed password
    const hashedPassword = user.password;

    console.log(user);

    // compare the passwords
    const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);

    // check if the password is correct
    if (!isPasswordCorrect) {
      // if the passwords do not match, return an error
      errorHandler(
        {
          statusCode: 400,
          type: "Bad Request",
          message: "Incorrect email or password",
        },
        req,
        res
      );
    } else {
      // if the passwords match, create a token
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );

      // set the token in the cookie
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" ? true : false,
      });

      // return 200 and the token
      res.status(200).json({
        status: "success",
        data: {
          message: "Login successful",
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            role: user.role,
          },
        },
      });
    }
  }
};
