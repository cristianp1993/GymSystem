const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Rutina = sequelize.define('Rutina', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  es_personalizada: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  creada_por: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
  }
}, {
  tableName: 'rutinas', 
  timestamps: false,    
});

module.exports = Rutina;
