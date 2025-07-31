const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

 const RutinaUsuario = sequelize.define('RutinaUsuario', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rutina_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha_asignacion: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'rutinas_usuarios',
    timestamps: false
  });

  RutinaUsuario.associate = (models) => {
    RutinaUsuario.belongsTo(models.Rutina, { foreignKey: 'rutina_id' });
    RutinaUsuario.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
  };

  module.exports  = RutinaUsuario;