import express from "express";

import {
  buscarPorNombre,
  buscarPorEspecie,
  buscarPorTipo,
  buscarPorRequerimientosAgua,
  listarPlantas,
  crearPlanta,
} from "../controllers/planta_controller.js";

const router = express.Router();

router.post("/", crearPlanta);

router.get("/listado", listarPlantas);

router.get("/", buscarPorNombre);

router.get("/especie", buscarPorEspecie);

router.get("/tipo", buscarPorTipo);

router.get("/agua", buscarPorRequerimientosAgua);

export default router;
