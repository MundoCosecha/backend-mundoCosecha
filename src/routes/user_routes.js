import express from 'express';
import {register_user, user_login } from '../controllers/user_controllers.js';

const router = express.Router();

// ruta para el registro de usuarios

router.post('/registro', register_user);

//ruta para loguear a los usuarios

router.post('/inicioSesion', user_login);

// rutas de socket.io

router.get('/socket.io', (req, res) => {
    console.log('conectado');
})

export default router;