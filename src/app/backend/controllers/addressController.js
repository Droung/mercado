const db = require('../config/db'); // Asegúrate de que este sea el archivo de configuración de la base de datos
const jwt = require('jsonwebtoken'); // Para verificar el token JWT

// Función para generar el código de dirección
const generateAddressCode = (estado, municipio) => {
  // Extraemos las dos primeras letras del estado y municipio, y lo concatenamos
  const estadoCode = estado.slice(0, 2).toUpperCase();
  const municipioCode = municipio.slice(0, 2).toUpperCase();

  // Consulta para obtener el último código de dirección para ese estado y municipio
  const query = `
    SELECT codigo_direccion
    FROM direcciones
    WHERE codigo_direccion LIKE ?
    ORDER BY codigo_direccion DESC LIMIT 1
  `;
  return new Promise((resolve, reject) => {
    db.query(query, [`${estadoCode}${municipioCode}%`], (err, results) => {
      if (err) {
        return reject(err);
      }

      let newCode = `${estadoCode}${municipioCode}001`; // Default to 001 if no previous code
      if (results.length > 0) {
        // Si existe un código, incrementamos el último número
        const lastCode = results[0].codigo_direccion;
        const lastNumber = parseInt(lastCode.slice(4), 10);
        newCode = `${estadoCode}${municipioCode}${(lastNumber + 1).toString().padStart(3, '0')}`;
      }
      resolve(newCode);
    });
  });
};

// Crear una nueva dirección
const createAddress = (req, res) => {
  const { direccion, codigo_postal, estado, municipio, localidad, colonia, numeroInterior, indicaciones, tipoDomicilio, nombre, numero_telefono } = req.body;

  // Verificar si todos los campos están presentes
  if (!direccion || !codigo_postal || !estado || !municipio || !colonia || !nombre || !numero_telefono) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Obtener el código de usuario desde el token
  const token = req.headers['authorization']?.split(' ')[1]; // Obtener el token del encabezado
  if (!token) {
    return res.status(401).json({ error: 'No se proporcionó el token' });
  }

  // Verificar el token y obtener el código de usuario
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Token no válido' });
    }

    const codigo_usuario = decoded.codigo_usuario; // Código del usuario autenticado

    // Generar el código de dirección
    generateAddressCode(estado, municipio)
      .then((codigo_direccion) => {
        // Insertar la dirección con el código generado
        const query = `
          INSERT INTO direcciones (direccion, codigo_postal, estado, municipio, localidad, colonia, numeroInterior, indicaciones, tipoDomicilio, nombre, numero_telefono, codigo_cliente, codigo_direccion)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        
        db.query(query, [direccion, codigo_postal, estado, municipio, localidad, colonia, numeroInterior, indicaciones, tipoDomicilio, nombre, numero_telefono, codigo_usuario, codigo_direccion], (err, result) => {
          if (err) {
            console.error('Error al insertar la dirección:', err);
            return res.status(500).json({ error: 'Error al registrar la dirección', details: err.message });
          }

          res.status(201).json({ message: 'Dirección registrada con éxito', id: result.insertId });
        });
      })
      .catch((err) => {
        console.error('Error al generar el código de dirección:', err);
        return res.status(500).json({ error: 'Error al generar el código de dirección', details: err.message });
      });
  });
};

module.exports = { createAddress };
