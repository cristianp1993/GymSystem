const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,       
  process.env.DB_USER,       
  process.env.DB_PASSWORD,   
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false, 
  }
);

// Test de conexión
sequelize.authenticate()
  .then(() => console.log('✅ Conexión a la base de datos exitosa (Sequelize)'))
  .catch(err => console.error('❌ Error de conexión con Sequelize:', err));

module.exports = sequelize;