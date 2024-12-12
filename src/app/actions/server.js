require('dotenv').config(); // Cargar variables de entorno desde el archivo .env
const express = require('express');
const mysql = require('mysql2');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors'); // Importamos CORS

const app = express();
const port = process.env.PORT || 3001; 

// Crear carpeta 'uploads' si no existe
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Middleware para parsear datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Activar CORS

// Configuración de multer para la subida de imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);  // Guardar las imágenes en 'uploads/'
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nombre único
  }
});
const upload = multer({ storage: storage });

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST, // Usar las variables de entorno
  port: process.env.DB_PORT, // Usar las variables de entorno
  user: process.env.DB_USER, // Usar las variables de entorno
  password: process.env.DB_PASSWORD, // Usar las variables de entorno
  database: process.env.DB_NAME // Usar las variables de entorno
});

// Conexión a la base de datos
db.connect((err) => {
  if (err) throw err;
  console.log('Conexión a la base de datos establecida');
});

// Función para mapear la categoría a id_tipoproducto
function obtenerIdCategoria(categoria) {
  const categorias = {
    'Figura': 1,
    'Llaveros': 2,
    'Peluches': 3,
    'Otros': 4
  };
  return categorias[categoria] || 4; // Si no encuentra la categoría, asigna "Otros" (id 4)
}

// Ruta para recibir los datos del formulario
app.post('/guardar', upload.single('imagenProducto'), (req, res) => {
  const { nombreProducto, costoProducto, cantidadProducto, categoriaProducto, descripcionProducto } = req.body;
  const imagenProducto = req.file ? req.file.filename : null;

  // Verificar si los datos necesarios están presentes
  if (!nombreProducto || !costoProducto || !cantidadProducto || !categoriaProducto || !descripcionProducto) {
    return res.status(400).send('Faltan datos en el formulario');
  }

  // Obtener el id de la categoría
  const idCategoria = obtenerIdCategoria(categoriaProducto);

  // Consulta SQL para insertar los datos sin necesidad de pasar un id_articulo
  const query = 'INSERT INTO articulos (stock, nombre_Articulo, descripcion, costo, id_tipoproducto) VALUES (?, ?, ?, ?, ?)';
  const values = [cantidadProducto, nombreProducto, descripcionProducto, costoProducto, idCategoria];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error al guardar el producto');
    }
    res.send('Producto guardado correctamente');
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
