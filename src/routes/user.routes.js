import express from 'express';

import {register_user, user_login, ctrlGetUserInfoByToken } from '../controllers/user_controllers.js';
import { createUserSchema, loginUserSchema } from "../models/schemas/user_schema.js";
import { validator } from '../middleware/validaciones.js';


const router = express.Router();


router.get('/user', ctrlGetUserInfoByToken)

// ruta para el registro de usuarios

router.post('/registro', createUserSchema, validator , register_user);

//ruta para loguear a los usuarios

router.post('/inicioSesion',loginUserSchema, validator , user_login);

export default router;