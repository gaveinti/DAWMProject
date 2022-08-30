'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class equipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  equipo.init({
    nombre: DataTypes.STRING,
    anhoFundacion: DataTypes.DATE,
    cantidadTrofeos: DataTypes.INTEGER,
    pais: DataTypes.STRING,
    liga: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'equipo',
  });
  return equipo;
};