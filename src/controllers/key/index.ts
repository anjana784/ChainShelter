import type { RequestHandler } from "express";
import * as crypto from "crypto";

/**
 * @Controller generateWithPassphrase
 * @Description Generate a new key pair with passphrase
 * @access Private
 * @param {string} passphrase - The passphrase to encrypt the private key
 */
export const generateWithPassphrase: RequestHandler = (req, res) => {
  // get the passphrase from the request body
  const { passphrase } = req.body;

  // Generate a new key pair with passphrase
  const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
      cipher: "aes-256-cbc",
      passphrase: passphrase,
    },
  });

  //log the private key and public key
  console.log(privateKey);
  console.log(publicKey);

  // send dummy response
  res.send("Key generated successfully");
};

/**
 * @Controller generateWithoutPassphrase
 * @Description Generate a new key pair without passphrase
 * @access Private
 */

export const generateWithoutPassphrase: RequestHandler = (req, res) => {
  const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  });

  //log the private key and public key
  console.log(privateKey);
  console.log(publicKey);

  // send dummy response
  res.send("Key generated successfully");
};
