import { IUserDTO } from "../../DTO/IUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

class CreateUserService {
  private userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }
  async execute({ email, username, password }: IUserDTO) {
    this.userRepository.create({ email, username, password });
  }
}
export { CreateUserService };
