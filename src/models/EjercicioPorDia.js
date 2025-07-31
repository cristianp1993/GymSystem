const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const EjercicioPorDia = sequelize.define('EjercicioPorDia', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  rutina_dia_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ejercicio_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  series: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  repeticiones: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  observaciones: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'ejercicios_por_dia',
  timestamps: false,
});

module.exports = EjercicioPorDia;
