var DataTypes = require("sequelize").DataTypes;
var _equipos = require("./equipos");
var _jugadors = require("./jugadors");
var _sequelizemeta = require("./sequelizemeta");

function initModels(sequelize) {
  var equipos = _equipos(sequelize, DataTypes);
  var jugadors = _jugadors(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);

  jugadors.belongsTo(equipos, { as: "idEquipo_equipo", foreignKey: "idEquipo"});
  equipos.hasMany(jugadors, { as: "jugadors", foreignKey: "idEquipo"});

  return {
    equipos,
    jugadors,
    sequelizemeta,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
