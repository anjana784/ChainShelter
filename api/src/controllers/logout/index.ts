import type { RequestHandler } from "express";

/**
 * @controller POST /api/logout
 * @access Private
 * @description Logout a user
 */
export const logout: RequestHandler = async (req, res) => {
  // return 200 and the token
  res.status(200).json({
    status: "success",
    data: {
      message: "Logout successful",
    },
  });
};
