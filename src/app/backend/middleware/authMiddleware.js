const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Obtener el token del encabezado Authorization
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  console.log('Clave secreta del servidor:', process.env.JWT_SECRET);

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('Error al verificar el token:', err.message);
      return res.status(403).json({ error: 'Token no válido' });
    }

    req.codigo_usuario = decoded.codigo_usuario; // Extraer el código de usuario del token
    console.log('Código de usuario recibido:', req.codigo_usuario);
    next(); // Continuar con la siguiente función del middleware o el controlador
  });
};

module.exports = authMiddleware;
