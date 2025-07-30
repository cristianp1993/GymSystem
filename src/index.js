const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config();
const db = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());


// Rutas
app.use('/api', routes);


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('API de Atlas Gym funcionando 💪');
});

// Probar conexión con la DB
db.authenticate()
  .then(() => {
    console.log('✅ Conectado a PostgreSQL con Sequelize');

    // Sincroniza modelos con la base de datos
    //return db.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error en conexión DB o sincronización:', err);
  });


  