const express = require('express');

const { createArticle } = require('../controllers/articleController');
const multer = require('multer');

const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
// Configuración de multer para manejar archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Ruta para crear artículo
router.post('/create', authMiddleware,upload.single('imagenProducto'), createArticle);

module.exports = router;
