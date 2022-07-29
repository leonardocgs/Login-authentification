import { IUserDTO } from "../../DTO/IUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

class CreateUserService {
  private userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }
  async execute({ email, username, password }: IUserDTO) {
    const isUserAlreadyInserted = await this.userRepository.checksIfUserExists(
      email
    );
    if (isUserAlreadyInserted) {
      throw new Error("User already exists");
    }
    await this.userRepository.create({ email, username, password });
  }
}
export { CreateUserService };
