
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db.js'); // Configura tu conexión a MySQL

// Registro de usuario
const registerUser = async (req, res) => {
 
  const { email, firstName, PaternlastName, MaternlastName, password, userType } = req.body;
  const fechaRegistro = new Date().toISOString().split('T')[0];


// Función para generar el código de usuario
const generateUserCode = (firstName, paterLastName, maternLastName) => {
    
  const date = new Date();
  const dateString = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
  return `${paterLastName.slice(0, 2).toUpperCase()}${maternLastName.slice(0, 1).toUpperCase()}${firstName.slice(0, 2).toUpperCase()}${dateString}`;
};

  if (!password) {
    return res.status(400).json({ error: 'La contraseña es obligatoria' });
  }

  try {
    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    const codigo_usuario = generateUserCode(firstName, PaternlastName, MaternlastName);
    console.log("Codigo de Usuario creado: "+codigo_usuario);
    

    // Insertar el usuario en la base de datos
    const query = `INSERT INTO usuarios (codigo_usuario, nombre, apellido_paterno, apellido_materno,correo, contraseña, tipoUsuario,fecha_registro) VALUES (?, ?, ?, ?, ?, ?,?,?)`;

    db.query(query, [codigo_usuario, firstName, PaternlastName, MaternlastName,email,  hashedPassword, userType,fechaRegistro], (err, result) => {
      if (err) {
        console.error('Error al registrar el usuario:', err);
        return res.status(500).json({ error: 'Error al registrar el usuario', details: err.message });
      }

      res.status(201).json({ message: 'Usuario registrado con éxito, redirigiendo a login...' });
      
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
    // Clave secreta usada para firmar
      const payload={codigo_usuario: user.codigo_usuario};
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ message: 'Inicio de sesión exitoso', token });
    
    } catch (compareErr) {
      console.error('Error al comparar contraseñas:', compareErr);
      return res.status(500).json({ error: 'Error al verificar la contraseña' });
    }
  });
};

module.exports = { registerUser, loginUser };
