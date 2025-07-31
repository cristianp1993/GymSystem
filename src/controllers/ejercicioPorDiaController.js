const ExercisePerDay = require('../models/EjercicioPorDia');

exports.createExercisePerDay = async (req, res) => {
  try {
    const newExercise = await ExercisePerDay.create(req.body);
    res.status(201).json({ success: true, data: newExercise });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating exercise per day.', error });
  }
};

exports.getAllExercisesPerDay = async (req, res) => {
  try {
    const exercises = await ExercisePerDay.findAll();
    res.json({ success: true, data: exercises });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error getting exercises per day.', error });
  }
};


exports.getExercisePerDayById = async (req, res) => {
  try {
    const exercise = await ExercisePerDay.findByPk(req.params.id);
    if (!exercise) {
      return res.status(404).json({ success: false, message: 'Exercise not found.' });
    }
    res.json({ success: true, data: exercise });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error getting exercise per day.', error });
  }
};


exports.updateExercisePerDay = async (req, res) => {
  try {
    const updated = await ExercisePerDay.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating exercise per day.', error });
  }
};


exports.deleteExercisePerDay = async (req, res) => {
  try {
    await ExercisePerDay.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Exercise deleted successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting exercise per day.', error });
  }
};
