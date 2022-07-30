import { IUserRepository } from "../../repositories/IUserRepository";

class DeleteUserService {
  constructor(private userRepository: IUserRepository) {}
  async execute(userId: string) {
    await this.userRepository.deleteById(userId);
  }
}

export { DeleteUserService };
