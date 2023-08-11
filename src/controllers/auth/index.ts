import type { RequestHandler } from "express";
import dbConnect from "./../../utils/dbConnect";
import errorHandler from "./../../middlewares/errorHandler";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export const login: RequestHandler = async (req, res) => {
  // get the email and password from the request body
  const { email, password } = req.body;

  // get the users collection
  const { client, usersCollection } = await dbConnect();

  // check if the user exists
  const user = await usersCollection.findOne({ email });

  // close the connection to the database
  await client.close();

  // if the user does not exist, return an error
  if (!user) {
    errorHandler(
      {
        statusCode: 400,
        type: "Bad Request",
        message: "user does not exist",
      },
      req,
      res
    );
  } else {
    // get the hashed password
    const hashedPassword = user.password;

    console.log(user);

    // compare the passwords
    const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);

    // if the passwords do not match, return an error
    if (!isPasswordCorrect) {
      errorHandler(
        {
          statusCode: 400,
          type: "Bad Request",
          message: "incorrect email or password",
        },
        req,
        res
      );
    } else {
      // else, create a token
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );

      // return 200 and the token
      res.status(200).json({
        status: "success",
        data: {
          message: "Login successful",
          user: {
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            role: user.role,
          },
          token,
        },
      });
    }
  }
};
