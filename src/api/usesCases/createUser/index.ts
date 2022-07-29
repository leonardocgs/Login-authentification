import UserSchema from "../../../database/schema/implemations/UserSchema";
import { PasswordEncoder } from "../../Encoders/implemations/PasswordEncoderBCrypt";
import { UserRepository } from "../../repositories/implemations/UserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";

const passwordEncoderBCrypt = new PasswordEncoder();
const userRepository = new UserRepository(UserSchema);
const createUserService = new CreateUserService(
  userRepository,
  passwordEncoderBCrypt
);
const createUserController = new CreateUserController(createUserService);

export { createUserController };
