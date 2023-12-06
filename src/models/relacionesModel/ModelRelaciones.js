import { Huerta, Tareas } from "../gestion.js";
import { user } from "../user_model.js";
Huerta.hasMany(Tareas, { foreignKey: "huertaId", onDelete: "CASCADE", onUpdate: "CASCADE" });
Tareas.belongsTo(Huerta, { foreignKey: "huertaId", onDelete: "CASCADE", onUpdate: "CASCADE" });

user.hasMany(Huerta, { foreignKey: "userId", onDelete: "CASCADE", onUpdate: "CASCADE" });
Huerta.belongsTo(user, { foreignKey: "userId", onDelete: "CASCADE", onUpdate: "CASCADE" });