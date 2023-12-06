import { Huerta, Tareas } from "../models/gestion.js";

// Obtener todas las huertas
export const getHuertas = async (req, res) => {
  try {
    const huertas = await Huerta.findAll();
    res.status(200).json(huertas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getHuertaById = async (req, res) => {
  const { id } = req.params;
  try {
    const huerta = await Huerta.findByPk(id);
    if (huerta) {
      res.status(200).json(huerta);
    } else {
      res.status(404).json({ mensaje: "Huerta no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva huerta
export const createHuerta = async (req, res) => {
  const { nombre, userId } = req.body;
  try {
    const nuevaHuerta = await Huerta.create({ nombre, userId });
    res.status(201).json(nuevaHuerta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar una huerta
export const updateHuerta = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  try {
    const huerta = await Huerta.findByPk(id);
    if (huerta) {
      huerta.nombre = nombre;
      await huerta.save();
      res.json(huerta);
    } else {
      res.status(404).json({ mensaje: "Huerta no encontrada" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar una huerta
export const deleteHuerta = async (req, res) => {
  const { id } = req.params;
  try {
    const huerta = await Huerta.findByPk(id);
    if (huerta) {
      await huerta.destroy();
      res.json({ mensaje: "Huerta eliminada exitosamente" });
    } else {
      res.status(404).json({ mensaje: "Huerta no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todas las tareas
export const getTareas = async (req, res) => {
  try {
    const tareas = await Tareas.findAll();
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTareaById = async (req, res) => {
  const { id } = req.params;
  try {
    const tarea = await Tareas.findAll({ where: { huertaId: id } });
    if (tarea) {
      res.json(tarea);
    } else {
      res.status(404).json({ mensaje: "Tarea no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Crear una nueva tarea
export const createTarea = async (req, res) => {
  const { nombre, descripcion, huertaId } = req.body;
  try {
    const nuevaTarea = await Tareas.create({ nombre, descripcion, huertaId });
    res.status(201).json(nuevaTarea);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar una tarea
export const updateTarea = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  try {
    const tarea = await Tareas.findByPk(id);
    if (tarea) {
      tarea.nombre = nombre;
      tarea.descripcion = descripcion;
      await tarea.save();
      res.json(tarea);
    } else {
      res.status(404).json({ mensaje: "Tarea no encontrada" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar una tarea
export const deleteTarea = async (req, res) => {
  const { id } = req.params;
  try {
    const tarea = await Tareas.findByPk(id);
    if (tarea) {
      await tarea.destroy();
      res.json({ mensaje: "Tarea eliminada exitosamente" });
    } else {
      res.status(404).json({ mensaje: "Tarea no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
