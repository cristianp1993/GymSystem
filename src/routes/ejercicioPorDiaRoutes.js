const express = require('express');
const router = express.Router();
const controller = require('../controllers/ejercicioPorDiaController');
const { authMiddleware, authorizeRoles } = require('../middlewares/authMiddleware');

// Proteger todas las rutas con autenticación
router.use(authMiddleware);

// 👇 Solo admin o entrenador pueden crear, actualizar, eliminar
router.post('/', authorizeRoles('admin', 'entrenador'), controller.createExercisePerDay);
router.put('/:id', authorizeRoles('admin', 'entrenador'), controller.updateExercisePerDay);
router.delete('/:id', authorizeRoles('admin', 'entrenador'), controller.deleteExercisePerDay);

// 👇 Todos los usuarios autenticados pueden ver 
router.get('/', controller.getAllExercisesPerDay);
router.get('/:id', controller.getExercisePerDayById);
// router.get('/by-rutine-day/:rutina_dia_id', controller.getExercisesByRutinaDiaId);

module.exports = router;
