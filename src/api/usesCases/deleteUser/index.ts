import UserSchema from "../../../database/schema/implemations/UserSchema";
import { UserRepository } from "../../repositories/implemations/UserRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserService } from "./DeleteUserService";

const userRepository = new UserRepository(UserSchema);
const deleteUserService = new DeleteUserService(userRepository);
const deleteUserController = new DeleteUserController(deleteUserService);

export { deleteUserController };
