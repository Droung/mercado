const express = require('express');
const db = require('../config/db');
const router = express.Router();

router.get('/products', (req, res) => {
    const query = 'SELECT * FROM articulos LIMIT 15';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener los productos:', err);
        return res.status(500).json({ error: 'Error al obtener los productos' });
      }
      res.json(results);
    });
});

module.exports = router;
