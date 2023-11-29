import { Router } from "express";
import {
  getHuertas,
  createHuerta,
  updateHuerta,
  deleteHuerta,
} from "../controllers/gestion.controller.js";
import {
  getTareas,
  createTarea,
  updateTarea,
  deleteTarea,
} from "../controllers/gestion.controller.js";

const router = Router();

router.get("/huertas", getHuertas);
router.post("/huertas", createHuerta);
router.put("/huertas/:id", updateHuerta);
router.delete("/huertas/:id", deleteHuerta);

router.get("/tareas", getTareas);
router.post("/tareas", createTarea);
router.put("/tareas/:id", updateTarea);
router.delete("/tareas/:id", deleteTarea);

export default router;
