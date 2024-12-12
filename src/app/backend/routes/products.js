const express = require('express');
const db = require('../config/db');
const router = express.Router();

// Ejemplo de ruta en el servidor backend (Express)
router.get('/products', async (req, res) => {
  try {
    const query = 'SELECT id_articulo, nombre_articulo, costo, descripcion, imagen FROM articulos';
    const [rows] = await db.promise().query(query);
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});

module.exports = router;
