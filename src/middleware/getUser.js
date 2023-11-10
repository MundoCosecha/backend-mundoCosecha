import { environments } from '../config/environments.js';
//import { getYserById } from '../models/user_model.js';
import jwt from 'jsonwebtoken';

export const getUser = async (req, res, next) => {
    const token = req.headers.authorization

    if(!token) {
        return res.sendStatus(404);
    }

    const { user_name : userId } = jwt.verify(token, environments.SECRET);

    const user = await getUserById(userId);

    if (!user) {
        return res.sendStatus(403);
    }

    req.user = user
    next()

}