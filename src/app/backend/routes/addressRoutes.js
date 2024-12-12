const express = require('express');
const db = require('../config/db'); // Conexión a la base de datos
const router = express.Router();

// Ruta para guardar la dirección
router.post('/addressRoutes', (req, res) => {
  const {
    direccion, codigoPostal, estado, municipio, localidad, colonia,
    numeroInterior, indicaciones, tipoDomicilio, nombre, telefono
  } = req.body;

  const query = `INSERT INTO direcciones (direccion, codigoPostal, estado, municipio, localidad, colonia, numeroInterior, indicaciones, tipoDomicilio, nombre, telefono)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [direccion, codigoPostal, estado, municipio, localidad, colonia, numeroInterior, indicaciones, tipoDomicilio, nombre, telefono];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error al guardar la dirección:', err);
      return res.status(500).json({ error: 'Error al guardar la dirección', details: err.message });
    }

    res.status(201).json({ message: 'Dirección guardada exitosamente', data: results });
  });
});

module.exports = router;