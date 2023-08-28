const express = require('express');
const { Sequelize } = require('sequelize');
const config = require('./data/config/config.json');

const app = express();
const port = 3000;

// Usar la configuración de desarrollo
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

// Crea una instancia de Sequelize
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect
});

// Agrega un contexto base a todas las rutas
const contextPath = '/api/v1'; 
app.use(contextPath, express.json());

// Sincroniza los modelos con la base de datos antes de iniciar el servidor
async function sincronizarBaseDeDatos() {
  try {
    await sequelize.sync();
    console.log('Tablas sincronizadas con la base de datos.');
  } catch (error) {
    console.error('Error al sincronizar las tablas:', error); // Muestra el error en la consola
  }
}

// Llamada a la función para sincronizar la base de datos
sincronizarBaseDeDatos();

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Backend--API--Gladiador');
});

// Manejador de ruta para agregar un nuevo usuario
app.post('/api/v1/Insertar/usuarios', async (req, res) => {
  try {
    // Aquí puedes colocar la lógica para agregar el usuario a la base de datos
    res.json({ mensaje: 'Usuario agregado correctamente' });
  } catch (error) {
    console.error('Error al agregar el usuario:', error);
    res.status(500).json({ mensaje: 'Error al agregar el usuario' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

