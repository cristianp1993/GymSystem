const express = require('express');
const router = express.Router();
const rutinaUsuarioController = require('../controllers/rutinaUsuarioController');

router.post('/', rutinaUsuarioController.create);
router.get('/', rutinaUsuarioController.getAll);
router.get('/:id', rutinaUsuarioController.getById);
router.put('/:id', rutinaUsuarioController.update);
router.delete('/:id', rutinaUsuarioController.delete);

module.exports = router;
