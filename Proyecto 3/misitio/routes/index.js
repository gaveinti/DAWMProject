var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/reporte', function(req, res, next){
  Producto.findAll({
    attributes: {exclude: ["updatedAt","createdAt","cantidad", "id"]}
  })
  .then(productos => {
    res.render('reporte', { title: 'Reporte', arrProductosOpcion: productos });
  })
  .catch(error => res.status(400).send(error))
})

router.get('/info', function(req, res, next) {

  models.jugador.findAll({
    include: [{
      model: models.equipo,
      as: 'idEquipo_equipo'
    }],
  })
  .then(jugadores => {
    res.json(jugadores)
  })
  .catch(error => res.status(400).send(error))

})
