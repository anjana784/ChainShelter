import type { RequestHandler } from "express";
import User from "./../../models/user";
import dbConnect from "./../../utils/dbConnect";
import errorHandler from "./../../middlewares/errorHandler";
import * as bcrypt from "bcrypt";
import sendEmail from "./../../utils/sendEmail";

/**
 * @controller POST /api/getUser
 * @access Private
 * @description Get a user
 */
export const getUser: RequestHandler = async (req, res) => {};

/**
 * @controller POST /api/editUser
 * @access Private
 * @description Edit a user
 */
export const editUser: RequestHandler = async (req, res) => {};
