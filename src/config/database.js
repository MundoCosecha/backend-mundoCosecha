import Sequelize from "sequelize";

import { environment } from './environments.js';



export const sequelize = new Sequelize(
  environment.DB.DB_NAME,
  environment.DB.DB_USER,
  environment.DB.DB_PASSWORD,
  {
    host: environment.DB.DB_HOST,
    dialect: environment.DB.DB_DIALECT,
    port: environment.DB.DB_PORT,
  }
);

export const db_conecction = () => {
  try {
    sequelize.sync({ force: true });
    console.log("Data base connected");
  } catch (error) {
    console.log(error);
  }
};

