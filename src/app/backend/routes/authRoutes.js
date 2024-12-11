const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const db = require('../config/db');

const router = express.Router();

// Rutas de autenticación
router.post('/register', registerUser);
router.post('/login', loginUser);

// Ruta protegida de ejemplo
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Ruta protegida accedida con éxito' });
});

// Endpoint para obtener los datos del usuario autenticado por `codigo_usuario`
router.get('/user', authMiddleware, (req, res) => {
  const codigoUsuario = req.codigo_usuario; // Usar la variable del middleware
  console.log('Código de usuario recibido:', codigoUsuario);

  const query = `
    SELECT *
    FROM usuarios
    WHERE codigo_usuario = ?
  `;

  db.query(query, [codigoUsuario], (err, results) => {
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
      tipoUsuario: results[0].tipoUsuario,
      codigo_usuario: codigoUsuario,
      pedidos: pedidos, // Agregar pedidos simulados
    };

    res.json(userData);
  });
});

module.exports = router;
