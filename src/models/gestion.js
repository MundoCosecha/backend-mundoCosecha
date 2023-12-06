import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Huerta = sequelize.define("huerta", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export const Tareas = sequelize.define("tareas", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
