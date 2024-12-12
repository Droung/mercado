const express = require('express');
const { createAddress } = require('../controllers/addressController');
const authMiddleware = require('../middleware/authMiddleware'); // Importamos el middleware de autenticación

const router = express.Router();

// Ruta para crear una nueva dirección (requiere autenticación)
router.post('/createAdress', authMiddleware, createAddress);

module.exports = router;
