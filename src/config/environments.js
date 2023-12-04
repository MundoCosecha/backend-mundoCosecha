

export const enviroments = {
    PORT: process.env.PORT ?? 4000,

    SECRET: process.env.SECRET ?? "ññññ",
    BD: {   
        DB_NAME: process.env.DB_NAME ?? "mundocosecha" ,   
        DB_USER: process.env.DB_USER ?? "root",
        DB_PASSWORD: process.env.DB_PASSWORD ?? "",
        DB_HOST: process.env.DB_HOST ?? "127.0.0.1",
        DB_DIALECT: process.env.DB_DIALECT ?? "mysql",
    }
}

console.log(enviroments)
console.log(process.env.PORT)