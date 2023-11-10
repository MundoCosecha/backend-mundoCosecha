import { Router } from "express";
import { ctrlLoginUser, ctrlRegisterUser,ctrlGetUserInfoByToken } from '../controllers/auth_controllers.js';
import { createUserSchema, loginUserSchema } from "../models/schemas/user_schema.js";
import { validator } from '../middleware/validaciones.js';

const authRouter = Router()

authRouter.get('/user', ctrlGetUserInfoByToken)

authRouter.post('/login', loginUserSchema, validator, ctrlLoginUser)

authRouter.post('/register', createUserSchema, validator, ctrlRegisterUser)

export { authRouter }