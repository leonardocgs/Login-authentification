import mongoose from "mongoose";

import { IUserSchema } from "../../../database/schema/IUserSchema";
import { IUserDTO } from "../../DTO/IUserDTO";
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

    this.UserModel = new mongoose.Model(schemaName, schema);
  }
  async create({ email, username, password }: IUserDTO) {
    const UserDocument = new this.UserModel({ email, username, password });
    await UserDocument.save();
  }
}

export { UserRepository };
