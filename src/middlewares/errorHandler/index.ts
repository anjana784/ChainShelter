import type { Request, Response } from "express";
import { appErrorType } from "./../../utils/types";

const errorHandler = (error: appErrorType, req: Request, res: Response) => {
  // log the error
  console.log(error);

  // return 500 and the error message
  res.status(error.statusCode).json({
    status: "Error",
    type: error.type,
    message: error.message,
  });
};

export default errorHandler;
