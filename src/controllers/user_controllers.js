import bcrypt from "bcrypt";
import { user } from "../models/user_model.js";
import jwt from "jsonwebtoken";
import { createJWT } from "../helpers/jsonwebtoken.js";

//controlador para el registro de usuarios

export const register_user = async (req, res) => {
  try {
    const { user_name, email, password } = req.body;

    //comprobar si el usuario ya existe en la base de datos

    const existing_user = await user.findOne({ where: { email, user_name } });

    if (existing_user) {
      return res.status(400).json({ error: "El usuario ya existe" });
    }

    const { token } = await createJWT({ user: user.id });

    //hashear la contraseña antes de almacenarla en la base de datos

    const hashear_password = await bcrypt.hash(password, 10);

    //crear un nuevo usuario

    const new_user = await user.create({
      user_name,
      email,
      password: hashear_password,
    });

    // res.status(200).json(token)
    res.status(201).json({ new_user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: " Error en el registro de usuario" });
  }
};

// controlador para el inicio de sesión para el usuario

export const user_login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validar datos de entrada
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Correo electronico y contraseña son obligatorio" });
    }

    //busca el usuario por su correo
    const user_name = await user.findOne({ where: { email } });
    if (!user_name) {
      return res
        .status(401)
        .json({ error: "el correo electronico no esta registrado" });
    }

    if (!user_name.password) {
      return res
        .status(500)
        .json({ error: "el usuario no tiene una contaseña valida" });
    }

    const passwordMatch = await bcrypt.compare(password, user_name.password);

    if (!passwordMatch)
      return res.status(401).json({ error: "La contraseña es incorrecta" });

    const token = await createJWT({ user: user.id });

    return res.json({ token, user_name });
  } catch (error) {
    console.error(error);
    //registrar el error para depuracion
    return res.status(500).json({ error: "Error al iniciar sesion" });
  }
};

export const ctrlGetUserInfoByToken = async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.sendStatus(404);
  }

  const { user: userId } = jwt.verify(token, enviroments.SECRET);

  const user = await getUserById(userId);

  if (!user) {
    return res.sendStatus(404);
  }

  res.status(200).json(user);
};

export const ctrlRefreshToken = async (req, res) => {
  const refreshToken = req.headers.refresh;

  if (!refreshToken) {
    return res.sendStatus(404);
  }

  const { user: userId } = jwt.verify(refreshToken, enviroments.REFRESH);
  try {
    const user = await getUserById(userId);
  } catch (error) {
    return res.sendStatus(404);
  }
  const token = jwt.sign({ user: userId }, enviroments.SECRET, {
    expiresIn: "7d",
  });
  res.status(200).json(token);
};
