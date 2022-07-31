import { IUserDTO } from "../../DTO/IUserDTO";
import { IPasswordEncoder } from "../../Encoders/IPasswordEncoder";
import { IUserRepository } from "../../repositories/IUserRepository";

class UpdateUserService {
  constructor(
    private userRepository: IUserRepository,
    private passwordEnconder: IPasswordEncoder
  ) {}
  async execute(userId: string, user: Partial<IUserDTO>) {
    const isUserPasswordSet = user.password;
    if (isUserPasswordSet) {
      user.password = await this.passwordEnconder.encode(user.password);
    }
    await this.userRepository.updateById(userId, user);
  }
}

export { UpdateUserService };
