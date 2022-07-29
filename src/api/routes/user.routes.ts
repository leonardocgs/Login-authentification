import express from "express";

import { createUserController } from "../usesCases/createUser";
import { loginUserController } from "../usesCases/loginUser";

const userRouter = express.Router();

userRouter.post("/create", (request, response) => {
  createUserController.handle(request, response);
});
userRouter.post("/login", (request, response) => {
  loginUserController.handle(request, response);
});

export { userRouter };
