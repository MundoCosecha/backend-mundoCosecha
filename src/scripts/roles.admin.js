import { ROLES, user, createUser } from '../models/user_model.js';
import bcrypt from 'bcrypt';


//define la informacion del nuevo usuario administrador 

export const nuevoAdmin = {
    user_name:"adminMundoCosecha",
    email:"adminMundoCosecha@gmail.com",
    password:"adminmundoCosecha",
    role:ROLES.ADMIN,
};


async function crearUsuarioAdministrador () {
    try{
        const usuarioCreado = await createUser(nuevoAdmin);
        console.log(`Usuario administrador creado con exito: ${usuarioCreado.user_name}`);
    }catch(error){
        console.error('Error al crear el usuario administrador: ', error);
    }
};

crearUsuarioAdministrador();
