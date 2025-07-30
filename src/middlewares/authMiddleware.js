const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token de autorización requerido' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secreto');
    req.user = decoded; // { id, rol }
    next();
  } catch (error) {
    console.error('Error al verificar token:', error.message);
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
};

// ✅ Middleware para restringir por roles
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.rol)) {
      return res.status(403).json({ error: 'Acceso denegado: rol insuficiente' });
    }
    next();
  };
};

module.exports = { authMiddleware, authorizeRoles };
