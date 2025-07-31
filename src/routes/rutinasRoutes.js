// routes/routineRoutes.js
const express = require('express');
const router = express.Router();
const routineController = require('../controllers/rutinaController');
const { authMiddleware, authorizeRoles } = require('../middlewares/authMiddleware');

// Obtener todas las rutinas (público o autenticado)
router.get('/', routineController.getAllRoutines);

// Crear rutina (solo admin)
router.post('/', authMiddleware, authorizeRoles('admin'), routineController.createRoutine);

// Actualizar rutina (solo admin)
router.put('/:id', authMiddleware, authorizeRoles('admin'), routineController.updateRoutine);

// Eliminar rutina (solo admin)
router.delete('/:id', authMiddleware, authorizeRoles('admin'), routineController.deleteRoutine);

// Obtener rutina por ID pero solo id nombre, para selectores
router.get('/simple', routineController.getAllSimple);

module.exports = router;
