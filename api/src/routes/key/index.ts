import { Router } from "express";
import {
  generateWithPassphrase,
  generateWithoutPassphrase,
} from "../../controllers/key";

const keyRouter = Router();

/**
 * @route POST /key/generate-with-passphrase
 * @description Generate a new key pair with passphrase
 * @access Private
 * @controller generateWithPassphrase
 * @param {string} passphrase - The passphrase to encrypt the private key
 */
keyRouter.post("/generate-with-passphrase", generateWithPassphrase);

/**
 * @route POST /key/generate-without-passphrase
 * @description Generate a new key pair without passphrase
 * @access Private
 * @controller generateWithoutPassphrase
 * @param null
 */
keyRouter.get("/generate-without-passphrase", generateWithoutPassphrase);

export default keyRouter;
