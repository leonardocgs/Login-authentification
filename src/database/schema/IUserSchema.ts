import mongoose from "mongoose";

import { IUserDTO } from "../../api/DTO/IUserDTO";

interface IUserSchema {
  getSchema(): mongoose.Schema<IUserDTO>;
  getName(): string;
}
export { IUserSchema };
