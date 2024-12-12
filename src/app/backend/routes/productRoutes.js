const express = require('express');
const db = require('../config/db');

const router = express.Router();

// Obtener todos los productos
router.get('/products', (req, res) => {
  const query = 'SELECT id_articulo, nombre_articulo, imagen, descripcion, costo FROM articulos';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener los productos:', err);
      return res.status(500).json({ error: 'Error al obtener los productos', details: err.message });
    }

    // Convertir el BLOB a base64
    const formattedResults = results.map((product) => {
      return {
        ...product,
        imagen: product.imagen ? `data:image/jpeg;base64,${product.imagen.toString('base64')}` : null,
      };
    });

    res.json(formattedResults);
  });
});

module.exports = router;
