import type { RequestHandler } from "express";
import User from "./../../models/user";
import dbConnect from "./../../utils/dbConnect";
import errorHandler from "./../../middlewares/errorHandler";
import * as bcrypt from "bcrypt";
import sendEmail from "./../../utils/sendEmail";

//Get Current logged in user
export const getUser: RequestHandler = async (req, res) => {};

//Edit Current logged in user
export const editUser: RequestHandler = async (req, res) => {};
