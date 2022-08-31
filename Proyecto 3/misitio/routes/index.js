var express = require('express');
const equipos = require('../models/equipos.js');
const equipo = require('../models/equipo').equipo;
var router = express.Router();

const Sequelize = require('sequelize');
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/reporte', function(req, res, next){
  equipo.findAll({
    attributes: {exclude: ["updatedAt","createdAt"]}
  })
  .then(equipos => {
    res.json(equipos);
  })
  .catch(error => res.status(400).send(error))
})

router.get('/info', function(req, res, next) {

  models.jugador.findAll({
    include: [{
      model: models.equipos,
      as: 'idEquipo_equipo'
    }],
  })
  .then(jugadores => {
    res.json(jugadores)
  })
  .catch(error => res.status(400).send(error))


  models.equipos.findAll({
    include: [{
      model: models.jugadors,
      as: 'jugadors'
    }],
  })
  .then(teams => {
    res.json(teams)
  })
  .catch(error => res.status(400).send(error))

})
