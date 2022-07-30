import express from "express";

import { authorize } from "../../util/middleware";
import { createUserController } from "../usesCases/createUser";
import { deleteUserController } from "../usesCases/deleteUser";
import { loginUserController } from "../usesCases/loginUser";

const userRouter = express.Router();

userRouter.post("/create", (request, response) => {
  createUserController.handle(request, response);
});
userRouter.post("/login", (request, response) => {
  loginUserController.handle(request, response);
});
userRouter.delete("/delete", authorize, (request, response) => {
  deleteUserController.handle(request, response);
});

export { userRouter };
