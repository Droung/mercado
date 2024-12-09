const jwt = require('jsonwebtoken');


const authMiddleware = (req, res, next) => {
  
  // Obtener el token del encabezado Authorization
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Token no proporcionado' });
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Token no válido' });
    req.codigo_cliente = decoded.codigo_cliente;
    next();
  });
  try {
    // Verificar el token (eliminar 'Bearer ' si el token se envía con ese prefijo)
    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);

    // Adjuntar la información del usuario decodificada al objeto `req`
    req.user = decoded;

    // Continuar con la siguiente función en la cadena de middleware
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
