const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const RutinaDia = sequelize.define('RutinaDia', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rutina_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dia_numero: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'rutina_dias',
  timestamps: false
});

module.exports = RutinaDia;
