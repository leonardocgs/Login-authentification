import mongoose from "mongoose";

class UserSchema {
  private userSchema: mongoose.Schema;
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
      userName: {
        type: String,
        required: true,
      },
    });
  }
  getSchema(): mongoose.Schema {
    return this.userSchema;
  }
}

export default new UserSchema();
