import type { Request, Response } from "express";
import AppError from "./../../models/appError";

const errorHandler = (error: AppError, req: Request, res: Response) => {
  // log the error
  console.log(error);

  // return 500 and the error message
  res.status(error.statusCode).json({
    error: error.error,
  });
};

export default errorHandler;
