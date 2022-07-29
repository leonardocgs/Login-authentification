import bcrypt from "bcrypt";

import { IPasswordEncoder } from "../IPasswordEncoder";

class PasswordEncoder implements IPasswordEncoder {
  async encode(password: string): Promise<string> {
    const saltRound = 10;
    const encodedPassword = await bcrypt.hash(password, saltRound);

    return encodedPassword;
  }
  async checksPassword(
    requestPassword: string,
    databasePassword: string
  ): Promise<boolean> {
    const isTheSamePassword = await bcrypt.compare(
      requestPassword,
      databasePassword
    );
    return isTheSamePassword;
  }
}
export { PasswordEncoder };
