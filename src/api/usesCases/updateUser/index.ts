import UserSchema from "../../../database/schema/implemations/UserSchema";
import { PasswordEncoder } from "../../Encoders/implemations/PasswordEncoderBCrypt";
import { UserRepository } from "../../repositories/implemations/UserRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserService } from "./UpdateUserService";

const passwordEncoder = new PasswordEncoder();
const userRepository = new UserRepository(UserSchema);
const updateUserService = new UpdateUserService(
  userRepository,
  passwordEncoder
);
const updateUserController = new UpdateUserController(updateUserService);

export { updateUserController };
