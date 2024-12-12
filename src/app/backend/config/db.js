const mysql = require('mysql');

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
};

let connection;

function handleDisconnect() {
  try {
    connection = mysql.createConnection(dbConfig);

    connection.connect((err) => {
      if (err) {
        console.error('Error connecting to MySQL:', err.message);
        setTimeout(handleDisconnect, 2000); // Reintentar la conexión después de 2 segundos
      } else {
        console.log('Connected to MySQL');
      }
    });

    connection.on('error', (err) => {
      console.error('MySQL error:', err.message);
      if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'ECONNRESET') {
        console.log('Reconnecting to MySQL...');
        handleDisconnect();
      } else {
        throw err;
      }
    });
  } catch (error) {
    console.error('Error in handleDisconnect function:', error.message);
    setTimeout(handleDisconnect, 2000); // Reintentar la conexión en caso de error en el bloque try
  }
}

// Iniciar la primera conexión
handleDisconnect();

module.exports = connection;
