import { IUserDTO } from "../DTO/IUserDTO";
import { User } from "../models/User";

interface IUserRepository {
  create(user: IUserDTO): void;
  deleteById(userId: string): void;
  updateById(userId: string, user: Partial<IUserDTO>): void;
  findByEmail(email: string): Promise<User>;
  checksIfUserExists(email: string): Promise<boolean>;
}
export { IUserRepository };
