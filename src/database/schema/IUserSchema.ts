import mongoose from "mongoose";

interface IUserSchema {
  getSchema(): mongoose.Schema;
  getName(): string;
}
export { IUserSchema };
