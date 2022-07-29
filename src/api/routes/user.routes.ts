import express from "express";

import { createUserController } from "../usesCases/createUser";

const userRouter = express.Router();

userRouter.post("/", (request, response) => {
  createUserController.handle(request, response);
});

export { userRouter };
