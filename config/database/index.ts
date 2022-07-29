import dotenv from "dotenv";

dotenv.config();

const { DB_USER, DB_PASSWORD, SECRET } = process.env;

export { DB_USER, DB_PASSWORD, SECRET };
