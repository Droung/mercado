const express = require('express');
const db = require('../config/db'); // Importa la conexión a la base de datos

const router = express.Router();

// Obtener todos los productos
router.get('/products', (req, res) => {
  const query = 'SELECT id, nombre, imagen, descripcion FROM productos';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener los productos:', err);
      return res.status(500).json({ error: 'Error al obtener los productos', details: err.message });
    }

    res.json(results);
  });
});

module.exports = router;
