
export const environment = {
  PORT: process.env.PORT || 5500, //SECRET es una propiedad y ella presenta una clave secreta que generalmente se utiliza para firmar y verificar tokens de autenticacion
  SECRET: process.env.SECRET || "ññññ", //Esta propiedad define la clave secreta
  DB: {
    DB_NAME: process.env.DB_NAME || "mundocosecha",
    DB_HOST: process.env.DB_HOST || "127.0.0.1",
    DB_DIALECT: process.env.DB_DIALECT || "mysql",
    DB_USER: process.env.DB_USER || "root",
    DB_PASSWORD: process.env.DB_PASSWORD || "",
    DB_PORT: process.env.DB_PORT || 3306,
  },
};