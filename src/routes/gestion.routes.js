import { Router } from "express";
import {
  getHuertas,
  createHuerta,
  updateHuerta,
  deleteHuerta,
  getHuertaById,
  createTarea,
  getTareas,
  updateTarea,
  deleteTarea,
  getTareaById,
} from "../controllers/gestion.controller.js";

const router = Router();

router.get("/huertas", getHuertas);
router.get("/huertas/:id", getHuertaById);
router.post("/huertas", createHuerta);
router.put("/huertas/:id", updateHuerta);
router.delete("/huertas/:id", deleteHuerta);

router.get("/tareas", getTareas);
router.get("/tareas/:id", getTareaById);
router.post("/tareas", createTarea);
router.put("/tareas/:id", updateTarea);
router.delete("/tareas/:id", deleteTarea);

export default router;
