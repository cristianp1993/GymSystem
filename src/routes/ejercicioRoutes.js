const express = require('express');
const router = express.Router();
const ejercicioController = require('../controllers/ejercicioController');
const { authMiddleware, authorizeRoles } = require('../middlewares/authMiddleware');


// Todas requieren token
router.get('/', authMiddleware, ejercicioController.getAll);
router.get('/:id', authMiddleware, ejercicioController.getById);
router.post('/', authMiddleware, authorizeRoles('admin'), ejercicioController.create);
router.put('/:id', authMiddleware, authorizeRoles('admin'), ejercicioController.update);
router.delete('/:id', authMiddleware, authorizeRoles('admin'), ejercicioController.delete);

module.exports = router;