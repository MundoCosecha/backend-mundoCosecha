import bcrypt from 'bcrypt';
import {user} from '../models/user_model.js';


//controlador para el registro de usuarios

export const register_user = async (req, res) => {
    try {
        const { user_name, email, password } = req.body;

        //comprobar si el usuario ya existe en la base de datos

        const existing_user = await user.findOne({ where: { email, user_name } });

        if (existing_user) {
            return res.status(400).json({ error: 'El usuario ya existe' });
        }
        // const existing_username = await user.findOne({ where: { user_name } });

        // if (existing_username) {
        //     return res.status(400).json({ error: 'El usuario ya existe' });
        // }

        //hashear la contraseña antes de almacenarla en la base de datos

        const hashear_password = await bcrypt.hash(password, 10);

        //crear un nuevo usuario

        const new_user = await user.create({ user_name, email, password: hashear_password });

        res.status(201).json(new_user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: ' Error en el registro de usuario' });
    }
};

// controlador para el inicio de sesión para el usuario

export const user_login = async (req, res) => {
    try {
        const { email, password } = req.body;

        //validar datos de entrada 
        if (!email || !password) {
            return res.status(400).json({ error: 'Correo electronico y contraseña son obligatorio' });
        }

        //busca el usuario por su correo 
        const user_name = await user.findOne({ where: { email } });
        if (!user_name) {
            return res.status(401).json({ error: 'el correo electronico no esta registrado' });
        }

        if (!user_name.password) {
            return res.status(500).json({ error: 'el usuario no tiene una contaseña valida' })
        }
        //comprobar la contraseña
        console.log({ password })
        console.log(user_name.password)
        const passwordMatch = await bcrypt.compare(password, user_name.password);
        if (passwordMatch) {
            return res.json({ message: 'Inicio de sesion exitoso' });
        } else {
            return res.status(401).json({ error: 'La contraseña es incorrecta' });
        }
    } catch (error) {
        console.error(error);
        //registrar el error para depuracion
        return res.status(500).json({ error: 'Error al iniciar sesion' });
    }
};

