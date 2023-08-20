import * as jwt from "jsonwebtoken";
import type { RequestHandler } from "express";
import errorHandler from "./../../middlewares/errorHandler";

const checkAuth: RequestHandler = (req, res, next) => {
  // get the token from the cookies
  const token = req.cookies.token;

  // check if the token is present
  if (!token) {
    // if the token is not present, return an error
    errorHandler(
      {
        statusCode: 401,
        type: "Unauthorized",
        message: "You are not logged in",
      },
      req,
      res
    );
  } else {
    // if the token is present, verify it

    // decode the token
    const decodedToken = jwt.decode(token);

    // check if the token is valid
    if (!decodedToken) {
      // if the token is not valid, return an error
      errorHandler(
        {
          statusCode: 401,
          type: "Unauthorized",
          message: "You are not logged in",
        },
        req,
        res
      );
    } else {
      // if the token is valid, set the user id in the request
      // req.userId = decodedToken.id;

      // call the next middleware
      next();
    }
  }
};

export default checkAuth;
