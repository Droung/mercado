const express = require('express');
const router = express.Router();
const { createArticle } = require('../controllers/articleController');
const multer = require('multer');

// Configuración de multer para manejar archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Ruta para crear artículo
router.post('/create', upload.single('imagenProducto'), createArticle);

module.exports = router;
