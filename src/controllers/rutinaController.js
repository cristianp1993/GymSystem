const Routine = require('../models/Rutina');

// Create a new routine
exports.createRoutine = async (req, res) => {
  try {
    const { name, description, is_custom } = req.body;
    const created_by = req.user.id;

    const newRoutine = await Routine.create({
      name,
      description,
      is_custom,
      created_by
    });

    res.status(201).json(newRoutine);
  } catch (error) {
    console.error('Error creating routine:', error);
    res.status(500).json({ error: 'Error creating the routine' });
  }
};

// Get all routines
exports.getAllRoutines = async (req, res) => {
  try {
    const routines = await Routine.findAll();
    res.json(routines);
  } catch (error) {
    console.error('Error fetching routines:', error);
    res.status(500).json({ error: 'Error fetching routines' });
  }
};

// Get routine by ID
exports.getRoutineById = async (req, res) => {
  try {
    const routine = await Routine.findByPk(req.params.id);
    if (!routine) {
      return res.status(404).json({ error: 'Routine not found' });
    }
    res.json(routine);
  } catch (error) {
    console.error('Error fetching routine:', error);
    res.status(500).json({ error: 'Error fetching the routine' });
  }
};

// Update routine
exports.updateRoutine = async (req, res) => {
  try {
    const routine = await Routine.findByPk(req.params.id);
    if (!routine) {
      return res.status(404).json({ error: 'Routine not found' });
    }

    await routine.update(req.body);
    res.json(routine);
  } catch (error) {
    console.error('Error updating routine:', error);
    res.status(500).json({ error: 'Error updating the routine' });
  }
};

// Delete routine
exports.deleteRoutine = async (req, res) => {
  try {
    const routine = await Routine.findByPk(req.params.id);
    if (!routine) {
      return res.status(404).json({ error: 'Routine not found' });
    }

    await routine.destroy();
    res.json({ message: 'Routine deleted successfully' });
  } catch (error) {
    console.error('Error deleting routine:', error);
    res.status(500).json({ error: 'Error deleting the routine' });
  }
};


exports.getAllSimple = async (req, res) => {
  try {
    const rutinas = await Rutina.findAll({
      attributes: ['id', 'nombre'], // Solo traemos lo necesario para el select
    });
    res.json(rutinas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error retrieving routines' });
  }
};