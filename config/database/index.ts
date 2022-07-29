import dotenv from "dotenv";

dotenv.config();

const DATABASE_USERNAME = process.env.DB_USER;
const DATABASE_PASSWORD = process.env.DB_PASSWORD;

export { DATABASE_USERNAME, DATABASE_PASSWORD };
