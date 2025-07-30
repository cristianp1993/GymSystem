const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Ejercicio = sequelize.define('Ejercicio', {
  id: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    nombre: { 
    type: DataTypes.STRING,
    allowNull: false
    },
    descripcion: {
    type: DataTypes.STRING,
    allowNull: true
    },
    url_video: {
    type: DataTypes.STRING, 
    allowNull: true
    }
},{
        tablaName: 'ejercicios',
        timestamps: false
    
});

module.exports = Ejercicio;