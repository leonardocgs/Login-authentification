interface IPasswordEncoder {
  encode(password: string): Promise<string>;
  checksPassword(
    requestPassword: string,
    databasePassword: string
  ): Promise<boolean>;
}
export { IPasswordEncoder };
