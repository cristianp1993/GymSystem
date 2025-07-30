const express = require('express');
const router = express.Router();
const authController  = require('../controllers/authController');

// Rutas para usuarios
router.post('/login', authController.login); 

module.exports = router;