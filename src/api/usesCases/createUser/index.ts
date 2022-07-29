import UserSchema from "../../../database/schema/implemations/UserSchema";
import { UserRepository } from "../../repositories/implemations/UserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";

const userRepository = new UserRepository(UserSchema);
const createUserService = new CreateUserService(userRepository);
const createUserController = new CreateUserController(createUserService);

export { createUserController };
