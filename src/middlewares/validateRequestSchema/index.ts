import { validationResult } from "express-validator";
import type { RequestHandler } from "express";
import handleErrors from "../errorHandler";
import AppError from "../../models/AppError";

const validateRequestSchema: RequestHandler = (req, res, next) => {
  // get the validation result from the Request object
  const result = validationResult(req);

  // if there are validation errors
  if (!result.isEmpty()) {
    // create an error object
    const error = new AppError(400, {
      type: "Bad Request",
      message: result.array()[0].msg,
    });

    // return 400 and the error message
    handleErrors(error, req, res);
  } else {
    // else, proceed to the next middleware
    next();
  }
};

export default validateRequestSchema;
