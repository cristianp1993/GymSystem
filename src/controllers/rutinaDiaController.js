const RutinaDia  = require('../models/RutinaDia');

exports.create = async (req, res) => {
  try {
    const rutinaDia = await RutinaDia.create(req.body);
    res.status(201).json(rutinaDia);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear rutina_dia' });
  }
};

exports.getAll = async (req, res) => {
  try {
    const lista = await RutinaDia.findAll();
    res.json(lista);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await RutinaDia.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'No encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el dato' });
  }
};

exports.update = async (req, res) => {
  try {
    const item = await RutinaDia.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'No encontrado' });

    await item.update(req.body);
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar' });
  }
};

exports.delete = async (req, res) => {
  try {
    const item = await RutinaDia.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'No encontrado' });

    await item.destroy();
    res.json({ message: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar' });
  }
};
