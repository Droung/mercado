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
      if (err) {
        console.error('Error al registrar el usuario:', err);
        return res.status(500).json({ error: 'Error al registrar el usuario', details: err.message });
      }
      res.status(201).json({ message: 'Usuario registrado con éxito' });
    });
  } catch (error) {
    console.error('Error del servidor:', error);
    res.status(500).json({ error: 'Error del servidor', details: error.message });
  }
};

// Inicio de sesión
const loginUser = (req, res) => {
  const { email, password } = req.body;

  console.log('Email recibido:', email);
  console.log('Contraseña recibida:', password);

  // Escapar las comillas dobles en el email para evitar errores de sintaxis
  const safeEmail = email.replace(/"/g, '\\"');

  const query = `SELECT * FROM usuarios WHERE email = "${safeEmail}"`;

  db.query(query, async (err, results) => {
    if (err) {
      console.error('Error en la consulta SQL:', err);
      return res.status(500).json({ error: `Error del servidor: ${err.message}` });
    }

    console.log('Resultados de la consulta:', results);

    if (results.length === 0) {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    const user = results[0];
    console.log('Usuario encontrado:', user);

    try {
      const isMatch = await bcrypt.compare(password, user.password);
      console.log('¿Contraseña coincide?:', isMatch);

      if (!isMatch) {
        return res.status(400).json({ error: 'Credenciales inválidas' });
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ message: 'Inicio de sesión exitoso', token });
    } catch (compareErr) {
      console.error('Error al comparar contraseñas:', compareErr);
      return res.status(500).json({ error: 'Error al verificar la contraseña' });
    }
  });
};

module.exports = { registerUser, loginUser };
