import mongoose from "mongoose";

import { IUserSchema } from "../../../database/schema/IUserSchema";
import { IUserDTO } from "../../DTO/IUserDTO";
import { User } from "../../models/User";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  private UserModel: mongoose.Model<IUserDTO>;
  private UserSchema: IUserSchema;
  constructor(userSchema: IUserSchema) {
    this.UserSchema = userSchema;
    this.setModel();
  }
  private setModel(): void {
    const schemaName = this.UserSchema.getName();
    const schema = this.UserSchema.getSchema();

    this.UserModel = mongoose.model(schemaName, schema);
  }
  async create({ email, username, password }: IUserDTO) {
    const UserDocument = new this.UserModel({ email, username, password });
    await UserDocument.save();
  }
  async deleteById(userId: string) {
    await this.UserModel.deleteOne({ _id: userId });
  }
  async updateById(userId: string, user: Partial<IUserDTO>) {
    await this.UserModel.updateOne({ _id: userId }, user);
  }
  async findByEmail(emailSearch: string): Promise<User> {
    const userFound = await this.UserModel.findOne({
      email: emailSearch,
    }).exec();
    if (userFound) {
      const { username, email, password, _id } = userFound;
      const id = _id.toString();
      const user = new User(username, email, password, id);
      return user;
    }
    throw new Error("User not found");
  }
  async checksIfUserExists(email: string): Promise<boolean> {
    const isUserAlreadyInserted = await this.UserModel.exists({ email });
    if (isUserAlreadyInserted) {
      return true;
    }
    return false;
  }
}

export { UserRepository };
