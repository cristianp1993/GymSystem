const express = require('express');
const router = express.Router();

// Importar subrutas
const usuarioRoutes = require('./usuarioRoutes');
const authRoutes = require('./auth');
const ejercicioRoutes = require('./ejercicioRoutes');
const rutinaRoutes = require('./rutinasRoutes');
const evaluacionFisicaRoutes = require('./evaluacionFisicaRoutes.js');
const rutinaDiaRoutes = require('./rutinaDiaRoutes');
const rutinaUsuarioRoutes = require('./rutinaUsuarioRoutes');
const ejercicioPorDiaRoutes = require('./ejercicioPorDiaRoutes');

router.use('/usuarios', usuarioRoutes);
router.use('/auth', authRoutes);
router.use('/ejercicios', ejercicioRoutes);
router.use('/rutinas', rutinaRoutes);
router.use('/rutinaDia', rutinaDiaRoutes);
router.use('/evaluaciones', evaluacionFisicaRoutes);
router.use('/rutinaUsuario', rutinaUsuarioRoutes);
router.use('/ejercicioPorDia', ejercicioPorDiaRoutes);


module.exports = router;