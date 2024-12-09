const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db.js'); // Configura tu conexión a MySQL

// Registro de usuario
const registerUser = async (req, res) => {
  const { nombre, apellido_paterno, apellido_materno, correo, contraseña, fecha_registro, tipoUsuario } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const query = 'INSERT INTO usuarios (nombre, apellido_paterno, apellido_materno, correo, contraseña, fecha_registro, tipoUsuario) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [nombre, apellido_paterno, apellido_materno, correo, hashedPassword, fecha_registro, tipoUsuario], (err, result) => {
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
const loginUser = (req, res) => {
  const { email, password } = req.body;

  console.log('Correo recibido:', email);
  console.log('Contraseña recibida:', password);

  const query = 'SELECT correo, contraseña, codigo_usuario FROM usuarios WHERE correo = ?';

  db.query(query, [email], async (err, results) => {
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
      const isMatch = await bcrypt.compare(password, user.contraseña);
      console.log('¿Contraseña coincide?:', isMatch);

      if (!isMatch) {
        return res.status(400).json({ error: 'Credenciales inválidas' });
      }

      // Generación de token con código de cliente
      const token = jwt.sign({ codigo_cliente: user.codigo_cliente }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ message: 'Inicio de sesión exitoso', token });
    } catch (compareErr) {
      console.error('Error al comparar contraseñas:', compareErr);
      return res.status(500).json({ error: 'Error al verificar la contraseña' });
    }
  });
};

module.exports = { registerUser, loginUser };
