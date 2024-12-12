const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db.js'); // Configura tu conexión a MySQL

// Registro de usuario
const registerUser = async (req, res) => {
  const { email, firstName, PaternlastName, MaternlastName, password, userType } = req.body;
  const fechaRegistro = new Date().toISOString().split('T')[0];

  // Función para generar el código de usuario con prefijos
  const generateUserCode = (firstName, paterLastName, maternLastName, userType) => {
    const date = new Date();
    const dateString = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
    const prefix = userType.toLowerCase() === 'cliente' ? 'CL' : 'VE';
    return `${prefix}${paterLastName.slice(0, 2).toUpperCase()}${maternLastName.slice(0, 1).toUpperCase()}${firstName.slice(0, 2).toUpperCase()}${dateString}`;
  };

  if (!password) {
    return res.status(400).json({ error: 'La contraseña es obligatoria' });
  }

  try {
    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    const codigo_usuario = generateUserCode(firstName, PaternlastName, MaternlastName, userType);
    console.log('Código de Usuario creado:', codigo_usuario);

    // Verificar si el correo ya existe en alguna de las tablas
    const checkEmailQuery = `
      SELECT correo FROM usuarios_clientes WHERE correo = ?
      UNION
      SELECT correo FROM usuarios_vendedores WHERE correo = ?
    `;

    db.query(checkEmailQuery, [email, email], async (err, results) => {
      if (err) {
        console.error('Error al verificar el correo electrónico:', err);
        return res.status(500).json({ error: 'Error al verificar el correo electrónico', details: err.message });
      }

      if (results.length > 0) {
        return res.status(400).json({ error: 'El correo electrónico ya está registrado en el sistema' });
      }

      // Insertar en la tabla correspondiente según el tipo de usuario
      if (userType.toLowerCase() === 'cliente') {
        const queryClientes = `
          INSERT INTO usuarios_clientes (codigo_usuario, nombre, apellido_paterno, apellido_materno, correo, contraseña, fecha_registro)
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        db.query(queryClientes, [codigo_usuario, firstName, PaternlastName, MaternlastName, email, hashedPassword, fechaRegistro], (err) => {
          if (err) {
            console.error('Error al registrar en la tabla usuarios_clientes:', err);
            return res.status(500).json({ error: 'Error al registrar en usuarios_clientes', details: err.message });
          }
          res.status(201).json({ message: 'Cliente registrado con éxito, redirigiendo a login...' });
        });
      } else if (userType.toLowerCase() === 'vendedor') {
        const queryVendedores = `
          INSERT INTO usuarios_vendedores (codigo_usuario, nombre, apellido_paterno, apellido_materno, correo, contraseña, fecha_registro)
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        db.query(queryVendedores, [codigo_usuario, firstName, PaternlastName, MaternlastName, email, hashedPassword, fechaRegistro], (err) => {
          if (err) {
            console.error('Error al registrar en la tabla usuarios_vendedores:', err);
            return res.status(500).json({ error: 'Error al registrar en usuarios_vendedores', details: err.message });
          }
          res.status(201).json({ message: 'Vendedor registrado con éxito, redirigiendo a login...' });
        });
      } else {
        res.status(400).json({ error: 'Tipo de usuario no válido' });
      }
    });
  } catch (error) {
    console.error('Error del servidor:', error);
    res.status(500).json({ error: 'Error del servidor', details: error.message });
  }
};

// Inicio de sesión
const loginUser = (req, res) => {
  const { email, password } = req.body;

  console.log('Correo recibido:', email);
  console.log('Contraseña recibida:', password);

  // Consulta para buscar en ambas tablas y obtener el tipo de usuario
  const query = `
    SELECT correo, contraseña, codigo_usuario, 'cliente' AS tipoUsuario FROM usuarios_clientes WHERE correo = ?
    UNION
    SELECT correo, contraseña, codigo_usuario, 'vendedor' AS tipoUsuario FROM usuarios_vendedores WHERE correo = ?
  `;

  db.query(query, [email, email], async (err, results) => {
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

      // Generación de token con código de usuario y tipo de usuario
      const payload = { codigo_usuario: user.codigo_usuario, tipoUsuario: user.tipoUsuario };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
      
      res.json({ message: 'Inicio de sesión exitoso', token, tipoUsuario: user.tipoUsuario });
    } catch (compareErr) {
      console.error('Error al comparar contraseñas:', compareErr);
      return res.status(500).json({ error: 'Error al verificar la contraseña' });
    }
  });
};

module.exports = { registerUser, loginUser };
