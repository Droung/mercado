const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db'); 
const authRoutes = require('./routes/authRoutes'); 
const articlesRoutes = require('./routes/articles');
const insertArticlesRoutes = require('./routes/articlesRoutes');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/articles', articlesRoutes);
app.use('/api/articles', insertArticlesRoutes);

// Endpoint de prueba
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
