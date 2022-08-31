const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jugadors', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idEquipo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'equipos',
        key: 'id'
      }
    },
    nombreInstagram: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    apellido: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    posicion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    marcaPatrocinadora: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fechaFichaje: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cantTitulosGanados: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jugadors',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idEquipo",
        using: "BTREE",
        fields: [
          { name: "idEquipo" },
        ]
      },
    ]
  });
};
