const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const jwt = require('jsonwebtoken'); // Importar jwt para verificar tokens
const db = require('../config/db');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Ruta protegida accedida con éxito' });
});
// Middleware para verificar el token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Token no proporcionado' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Token no válido' });
    req.codigo_cliente = decoded.codigo_cliente;
    next();
  });
};

// Endpoint para obtener los datos del usuario autenticado por `codigo_cliente`
router.get('/user', authenticateToken, (req, res) => {
  const codigoCliente = req.codigo_cliente;

  const query = `
    SELECT nombre, apellido_paterno, apellido_materno, correo, fecha_registro
    FROM usuarios
    WHERE codigo_usuario = ?
  `;

  db.query(query, [codigoCliente], (err, results) => {
    if (err) {
      console.error('Error al obtener los datos del usuario:', err);
      return res.status(500).json({ error: 'Error al obtener los datos del usuario' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Simular una lista de pedidos para el ejemplo
    const pedidos = ['Pedido 1', 'Pedido 2', 'Pedido 3'];

    const userData = {
      nombre: results[0].nombre,
      apellido_paterno: results[0].apellido_paterno,
      apellido_materno: results[0].apellido_materno,
      correo: results[0].correo,
      fecha_registro: results[0].fecha_registro,
      codigo_cliente: codigoCliente,

    };

    res.json(userData);
  });
});

module.exports = router;