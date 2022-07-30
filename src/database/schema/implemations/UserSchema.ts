import mongoose from "mongoose";

import { IUserDTO } from "../../../api/DTO/IUserDTO";
import { IUserSchema } from "../IUserSchema";

class UserSchema implements IUserSchema {
  private userSchema: mongoose.Schema<IUserDTO>;
  private name = "User";
  constructor() {
    this.userSchema = new mongoose.Schema({
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
    });
  }
  getSchema(): mongoose.Schema {
    return this.userSchema;
  }
  getName(): string {
    return this.name;
  }
}

export default new UserSchema();
