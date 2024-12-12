const express = require('express');
const db = require('../config/db.js');

const router = express.Router();

// Endpoint para buscar artículos por nombre
router.get('/search', (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Se requiere una cadena de búsqueda' });
  }

  const searchQuery = `
    SELECT id_articulo, nombre_articulo, costo
    FROM articulos
    WHERE nombre_articulo LIKE ?
  `;

  db.query(searchQuery, [`%${query}%`], (err, results) => {
    if (err) {
      console.error('Error al buscar artículos:', err);
      return res.status(500).json({ error: 'Error al buscar artículos', details: err.message });
    }

    res.json(results);
  });
});

module.exports = router;
