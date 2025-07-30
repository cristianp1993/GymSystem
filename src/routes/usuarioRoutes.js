const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { authMiddleware, authorizeRoles } = require('../middlewares/authMiddleware');

// Listar todos los usuarios (solo admin)
router.get('/', authMiddleware, authorizeRoles('admin'), usuarioController.getAll);

// Crear usuario (solo admin)
router.post('/', authMiddleware, authorizeRoles('admin'), usuarioController.create);

// Obtener usuario por ID (admin o el mismo usuario en el futuro)
router.get('/:id', authMiddleware, usuarioController.getById);

//  Actualizar usuario (por ahora solo admin)
router.put('/:id', authMiddleware, authorizeRoles('admin'), usuarioController.update);

//  Eliminar usuario (solo admin)
router.delete('/:id', authMiddleware, authorizeRoles('admin'), usuarioController.delete);

module.exports = router;
