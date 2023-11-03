import jwt from 'jsonwebtoken';
import { enviroments } from '../config/environments.js';



export const createJWT = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, enviroments.SECRET, (err, token) =>{
            if (err) {
                reject('Error al firmar el token')
            }

            resolve({ token })
        } )
    })
}