import { NextFunction, Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";

import { SECRET } from "../../config/database";
import { getSecondWord } from "../string";

const authorize = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const authorizeHeader = request.header("Authorization");
    const authorizeToken = getSecondWord(authorizeHeader);
    await jsonwebtoken.verify(authorizeToken, SECRET);

    request.userId = (await jsonwebtoken.decode(authorizeToken)) as string;

    return next();
  } catch (err) {
    return response.status(401).json({ message: "Invalid Token" });
  }
};
export { authorize };
