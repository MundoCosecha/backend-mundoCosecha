import { Sequelize } from "sequelize";
// import dotenv from "dotenv";
// dotenv.config();
import { enviroments } from './environments.js'


export const sequelize = new Sequelize(
  enviroments.BD.DB_NAME,
  enviroments.BD.DB_USER,
  enviroments.BD.DB_PASSWORD,
  {
    host: enviroments.BD.DB_HOST,
    dialect: enviroments.BD.DB_DIALECT,
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