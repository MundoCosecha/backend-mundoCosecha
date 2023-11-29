import Planta from "../models/planta.js";

export const crearPlanta = async (req, res) => {
  try {
    const nuevaPlanta = req.body;
    const plantaCreada = await Planta.create(nuevaPlanta);
    res.status(201).json(plantaCreada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export async function listarPlantas() {
  try {
    const plantas = await Planta.findAll();
    return plantas;
  } catch (error) {
    console.error("Error al listar plantas:", error);
    throw error;
  }
}

export async function buscarPorNombre() {
  try {
    const plantas = await Planta.findAll({
      where: {
        nombre: {
          [Op.iLike]: `%${nombre}%`, // Buscar por nombre que contenga la cadena proporcionada, sin importar mayúsculas o minúsculas
        },
      },
    });
    return plantas;
  } catch (error) {
    console.error("Error al buscar plantas por nombre:", error);
    throw error;
  }
}

export async function buscarPorEspecie() {
  try {
    const plantas = await Planta.findAll({
      where: {
        especie: {
          [Op.iLike]: `%${especie}%`, // Buscar por especie que contenga la cadena proporcionada, sin importar mayúsculas o minúsculas
        },
      },
    });
    return plantas;
  } catch (error) {
    console.error("Error al buscar plantas por especie:", error);
    throw error;
  }
}

export async function buscarPorTipo() {
  try {
    const plantas = await Planta.findAll({
      where: {
        tipo: {
          [Op.iLike]: `%${tipo}%`, // Buscar por tipo que contenga la cadena proporcionada, sin importar mayúsculas o minúsculas
        },
      },
    });
    return plantas;
  } catch (error) {
    console.error("Error al buscar plantas por tipo:", error);
    throw error;
  }
}

export async function buscarPorRequerimientosAgua(requerimientosAgua) {
  try {
    const plantas = await Planta.findAll({
      where: {
        requerimientos_agua: {
          [Op.iLike]: `%${requerimientosAgua}%`, // Buscar por requerimientos de agua que contengan la cadena proporcionada, sin importar mayúsculas o minúsculas
        },
      },
    });
    return plantas;
  } catch (error) {
    console.error("Error al buscar plantas por requerimientos de agua:", error);
    throw error;
  }
}
