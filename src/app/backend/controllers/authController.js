const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db.js'); // Configura tu conexión a MySQL

// Registro de usuario
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, hashedPassword], (err, result) => {
      if (err) return res.status(500).json({ error: 'Error al registrar el usuario' });
      res.status(201).json({ message: 'Usuario registrado con éxito' });
    });
  } catch (error) {
    res.status(500).json({ error: 'Error del servidor' });
  }
};

// Inicio de sesión
const loginUser = (req, res) => {
  const { correo, contraseña } = req.body;

  const query = 'SELECT * FROM usuarios WHERE correo = ?';
  db.query(query, [correo], async (err, results) => {
    if (err) {
      console.error('Error de base de datos:', err);
      return res.status(500).json({ error: `Error del servidor: ${err.message}` });
    }

    if (results.length === 0) {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(contraseña, user.contraseña);

    if (!isMatch) {
      return res.status(400).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
};

module.exports = { registerUser, loginUser };
