import { validationResult } from "express-validator";
import type { RequestHandler } from "express";
import handleErrors from "../errorHandler";

const validateRequestSchema: RequestHandler = (req, res, next) => {
  // get the validation result from the Request object
  const result = validationResult(req);

  // if there are validation errors
  if (!result.isEmpty()) {
    // return 400 and the error message
    handleErrors(
      {
        statusCode: 400,
        type: "Bad Request",
        message: result.array()[0].msg,
      },
      req,
      res
    );
  } else {
    // else, proceed to the next middleware
    next();
  }
};

export default validateRequestSchema;
