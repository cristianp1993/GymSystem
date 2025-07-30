const express = require('express');
const router = express.Router();

// Importar subrutas
const usuarioRoutes = require('./usuarioRoutes');
const authRoutes = require('./auth');
const ejercicioRoutes = require('./ejercicioRoutes');
const rutinaRoutes = require('./rutinasRoutes');

router.use('/usuarios', usuarioRoutes);
router.use('/auth', authRoutes);
router.use('/ejercicios', ejercicioRoutes);
router.use('/rutinas', rutinaRoutes);

module.exports = router;