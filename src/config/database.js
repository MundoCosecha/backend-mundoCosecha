import { Sequelize } from "sequelize";
// import dotenv from "dotenv";
// dotenv.config();
import { enviroments } from './environments.js'


export const sequelize = new Sequelize(
  enviroments.BD.DB_NAME,
  enviroments.BD.DB_USER,
  enviroments.BD.DB_PASSWORD,

  {
   port:enviroments.BD.DB_PORT,
    host: enviroments.BD.DB_HOST,
    dialect: enviroments.BD.DB_DIALECT || "mysql",
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