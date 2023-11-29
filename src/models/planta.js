import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

const Planta = sequelize.define("planta", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  especie: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  tipo: {
    type: DataTypes.STRING,
  },
  requerimientos_agua: {
    type: DataTypes.STRING,
  },
});

export default Planta;
