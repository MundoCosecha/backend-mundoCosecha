import jwt from 'jsonwebtoken';

import { environment } from "../config/environments.js"


export const createJWT = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, environment.SECRET, {
            expiresIn: '7d'
        }, (err, token) => {
            if (err) {
                reject('Error al firmar el token')
            }

            resolve({ token })
        })
    })
}