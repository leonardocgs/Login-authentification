import mongoose from "mongoose";

import App from "./App";
import { DB_USER, DB_PASSWORD } from "./config/database";

const main = async () => {
  const dbUri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@auth-node.eatqmva.mongodb.net/?retryWrites=true&w=majority`;
  await mongoose.connect(dbUri);
  console.log("Mongoose working");
  App.start(3000);
};
main().catch((err) => {
  console.log(err.message);
});
