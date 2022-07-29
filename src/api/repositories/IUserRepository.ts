import { IUserDTO } from "../DTO/IUserDTO";

interface IUserRepository {
  create(user: IUserDTO): void;
}
export { IUserRepository };
