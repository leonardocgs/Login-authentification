import UserSchema from "../../../database/schema/implemations/UserSchema";
import { PasswordEncoder } from "../../Encoders/implemations/PasswordEncoderBCrypt";
import { UserRepository } from "../../repositories/implemations/UserRepository";
import { LoginUserController } from "./LoginUserController";
import { LoginUserService } from "./LoginUserService";

const passwordEncoder = new PasswordEncoder();
const userRepository = new UserRepository(UserSchema);
const loginUserService = new LoginUserService(userRepository, passwordEncoder);
const loginUserController = new LoginUserController(loginUserService);

export { loginUserController };
