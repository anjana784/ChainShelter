import * as jwt from "jsonwebtoken";
import type { RequestHandler } from "express";
import errorHandler from "./../../middlewares/errorHandler";

const checkAuth: RequestHandler = (req, res, next) => {
  // get the token from the request header
  const token = req.headers.authorization?.split(" ")[1];

  // if the token is not present, return an error
  if (!token) {
    errorHandler(
      {
        statusCode: 401,
        type: "Unauthorized",
        message: "You are not authorized to access this resource",
      },
      req,
      res
    );
  } else {
    // else, verify the token
    jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
      // if there is an error, return an error
      if (err) {
        errorHandler(
          {
            statusCode: 401,
            type: "Unauthorized",
            message: "You are not authorized to access this resource",
          },
          req,
          res
        );
      } else {
        // else, proceed to the next middleware
        next();
      }
    });
  }
};

export default checkAuth;
