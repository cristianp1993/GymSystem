const EvaluacionFisica = require('../models/EvaluacionFisica');

exports.create = async (req, res) => {
  try {
    const nuevaEvaluacion = await EvaluacionFisica.create(req.body);
    res.status(201).json(nuevaEvaluacion);
  } catch (error) {
    console.error('Error creando evaluación física:', error);
    res.status(500).json({ error: 'Error al crear la evaluación física' });
  }
};

exports.getByUserId = async (req, res) => {
  try {
    const evaluaciones = await EvaluacionFisica.findAll({
      where: { usuario_id: req.params.usuario_id }
    });
    res.json(evaluaciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener evaluaciones' });
  }
};
exports.update = async (req, res) => {
  try {
    const evaluacion = await EvaluacionFisica.findByPk(req.params.id);
    if (!evaluacion) {
      return res.status(404).json({ error: 'Evaluación no encontrada' });
    }
    await evaluacion.update(req.body);
    res.json(evaluacion);
  } catch (error) {
    console.error('Error actualizando evaluación física:', error);
    res.status(500).json({ error: 'Error al actualizar la evaluación física' });
  }
};