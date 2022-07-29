import { IUserDTO } from "../../DTO/IUserDTO";
import { IPasswordEncoder } from "../../Encoders/IPasswordEncoder";
import { IUserRepository } from "../../repositories/IUserRepository";

class CreateUserService {
  private userRepository: IUserRepository;
  private passwordEnconder: IPasswordEncoder;
  constructor(
    userRepository: IUserRepository,
    passwordEncoder: IPasswordEncoder
  ) {
    this.userRepository = userRepository;
    this.passwordEnconder = passwordEncoder;
  }
  async execute({ email, username, password }: IUserDTO) {
    const isUserAlreadyInserted = await this.userRepository.checksIfUserExists(
      email
    );
    if (isUserAlreadyInserted) {
      throw new Error("User already exists");
    }
    const encodedPassword = await this.passwordEnconder.encode(password);
    await this.userRepository.create({
      email,
      username,
      password: encodedPassword,
    });
  }
}
export { CreateUserService };
