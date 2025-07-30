const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authController = {
  login: async (req, res) => {
    const { documento, password } = req.body;

    try {
      const user = await Usuario.findOne({ where: { documento } });

      if (!user) {
        return res.status(404).json({ message: 'Documento no registrado' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
      }

      const token = jwt.sign(
        { id: user.id, rol: user.rol },
        process.env.JWT_SECRET || 'secreto',
        { expiresIn: '2h' }
      );

      return res.status(200).json({
        message: 'Inicio de sesión exitoso',
        token,
        usuario: {
          id: user.id,
          nombre: user.nombre_completo,
          rol: user.rol,
        }
      });

    } catch (error) {
      console.error('Error en login:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
};

module.exports = authController;
