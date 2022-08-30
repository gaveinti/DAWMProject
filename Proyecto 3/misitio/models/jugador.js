'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jugador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jugador.init({
    idEquipo: DataTypes.INTEGER,
    nombreInstagram: DataTypes.STRING,
    apellido: DataTypes.STRING,
    posicion: DataTypes.STRING,
    marcaPatrocinadora: DataTypes.STRING,
    fechaFichaje: DataTypes.DATE,
    cantTitulosGanados: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'jugador',
  });
  return jugador;
};