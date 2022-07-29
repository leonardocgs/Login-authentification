import jsonwebtoken from "jsonwebtoken";

import { SECRET } from "../../../../config/database";
import { ILoginDTO } from "../../DTO/ILoginDTO";
import { IPasswordEncoder } from "../../Encoders/IPasswordEncoder";
import { IUserRepository } from "../../repositories/IUserRepository";

class LoginUserService {
  constructor(
    private userRepository: IUserRepository,
    private passwordEncoder: IPasswordEncoder
  ) {}
  async execute({
    email,
    password: requestPassword,
  }: ILoginDTO): Promise<string> {
    const isEmailCorrect = await this.userRepository.checksIfUserExists(email);

    if (!isEmailCorrect) {
      throw new Error("The Email or password is not correct");
    }

    const userFound = await this.userRepository.findByEmail(email);
    const databasePassword = userFound.getPassword();
    const isPasswordCorrect = await this.passwordEncoder.checksPassword(
      requestPassword,
      databasePassword
    );
    if (!isPasswordCorrect) {
      throw new Error("The Email or password is not correct");
    }
    const userId = userFound.getId();

    const jwtToken = await jsonwebtoken.sign(userId, SECRET);
    return jwtToken;
  }
}
export { LoginUserService };
