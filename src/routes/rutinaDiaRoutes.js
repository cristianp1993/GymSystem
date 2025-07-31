const express = require('express');
const router = express.Router();
const controller = require('../controllers/rutinaDiaController');
const {authMiddleware } = require('../middlewares/authMiddleware');

// CRUD completo
router.post('/', authMiddleware, controller.create);
router.get('/', authMiddleware, controller.getAll);
router.get('/:id', authMiddleware, controller.getById);
router.put('/:id', authMiddleware, controller.update);
router.delete('/:id', authMiddleware, controller.delete);

module.exports = router;
