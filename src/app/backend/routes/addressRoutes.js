const express = require('express');
const db = require('../config/db'); // Conexión a la base de datos
const router = express.Router();

// Ruta para guardar la dirección
router.post('/addressRoutes', (req, res) => {
  const {
    direccion, codigo_postal, estado, municipio, localidad, colonia,
    numeroInterior, indicaciones, tipoDomicilio, nombre, numero_telefono
  } = req.body;

  const query = `INSERT INTO direcciones (direccion, codigo_postal, estado, municipio, localidad, colonia, numeroInterior, indicaciones, tipoDomicilio, nombre, numero_telefono)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [direccion, codigo_postal, estado, municipio, localidad, colonia, numeroInterior, indicaciones, tipoDomicilio, nombre, numero_telefono];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error al guardar la dirección:', err);
      return res.status(500).json({ error: 'Error al guardar la dirección', details: err.message });
    }

    res.status(201).json({ message: 'Dirección guardada exitosamente', data: results });
  });
});


module.exports = router;