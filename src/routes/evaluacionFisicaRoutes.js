const express = require('express');
const router = express.Router();
const controller = require('../controllers/evaluacionFisicaController');
const { authMiddleware, authorizeRoles } = require('../middlewares/authMiddleware');

// Crear evaluación física (admin o entrenador)
router.post('/', authMiddleware, authorizeRoles('admin', 'entrenador'), controller.create);

// Obtener evaluaciones de un usuario
router.get('/usuario/:usuario_id', authMiddleware, controller.getByUserId);

router.put('/:id', authMiddleware, authorizeRoles('admin', 'entrenador'), controller.update);


module.exports = router;
