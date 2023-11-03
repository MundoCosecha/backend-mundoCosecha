import { Sequelize } from "sequelize";
// import dotenv from "dotenv";
// dotenv.config();
import { enviroments } from './environments.js'


export const sequelize = new Sequelize(
  enviroments.DB_NAME,
  enviroments.DB_USER,
  enviroments.DB_PASSWORD,
  {
    host: enviroments.DB_HOST,
    dialect: enviroments.DB_DIALECT,
  }
);
export const db_conecction = () => {
  try {
    sequelize.sync({ force: false });
    console.log("Data base connected");
  } catch (error) {
    console.log(error);
  }
};