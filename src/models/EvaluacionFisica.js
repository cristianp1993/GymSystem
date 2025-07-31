const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const EvaluacionFisica = sequelize.define('EvaluacionFisica', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  peso: DataTypes.FLOAT,
  altura: DataTypes.FLOAT,
  cintura: DataTypes.FLOAT,
  abdomen: DataTypes.FLOAT,
  brazos: DataTypes.FLOAT,
  piernas: DataTypes.FLOAT,
  observaciones: DataTypes.STRING
}, {
  tableName: 'evaluaciones_fisicas',
  timestamps: false
});

module.exports = EvaluacionFisica;
