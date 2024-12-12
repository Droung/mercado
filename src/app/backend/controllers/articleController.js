const db = require('../config/db');

const createArticle = (req, res) => {
  const { nombreProducto, costoProducto, cantidadProducto, categoriaProducto, descripcionProducto } = req.body;
  const imagenProducto = req.file ? req.file.buffer : null;
  const codigo_vendedor = req.codigo_usuario; // Extraído del middleware

  // Verifica que todos los campos necesarios estén presentes
  if (!nombreProducto || !costoProducto || !cantidadProducto || !categoriaProducto || !descripcionProducto || !imagenProducto || !codigo_vendedor) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios, incluido el código del vendedor' });
  }

  console.log('Categoría recibida:', categoriaProducto);
  console.log('Código del vendedor:', codigo_vendedor);

  // Consulta para obtener el id_tipoProducto a partir del nombre de la categoría (insensible a mayúsculas)
  const getCategoryIdQuery = `SELECT id_tipoProducto FROM tipoproducto WHERE LOWER(nombre_tipoProducto) = LOWER(?)`;

  db.query(getCategoryIdQuery, [categoriaProducto], (err, results) => {
    if (err) {
      console.error('Error al obtener id_tipoProducto:', err);
      return res.status(500).json({ error: 'Error al obtener la categoría', details: err.message });
    }

    if (results.length === 0) {
      return res.status(400).json({ error: 'La categoría proporcionada no existe' });
    }

    const id_tipoProducto = results[0].id_tipoProducto;

    // Insertar el artículo con el id_tipoProducto y el codigo_vendedor obtenido
    const insertArticleQuery = `
      INSERT INTO articulos (nombre_articulo, costo, stock, id_tipoProducto, descripcion, imagen, codigo_vendedor)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(insertArticleQuery, [nombreProducto, costoProducto, cantidadProducto, id_tipoProducto, descripcionProducto, imagenProducto, codigo_vendedor], (err, result) => {
      if (err) {
        console.error('Error al insertar el artículo:', err);
        return res.status(500).json({ error: 'Error al crear el artículo', details: err.message });
      }

      res.status(201).json({ message: 'Artículo creado con éxito', id: result.insertId });
    });
  });
};

module.exports = { createArticle };
