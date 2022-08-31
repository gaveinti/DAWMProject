var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const Equipo = require('../models').equipo;
const Jugadores = require('../models').jugador;

/* GET users listing. */
/*Funcion GET  que brinda los datos de la tabla equipos del MYSQL */
router.get('/equipos', function(req, res, next) {
    Equipo.findAll({})
    .then(resultado => {
        res.json(resultado);
    })
    .catch(error => res.status(400).send(error))
});

/*Funcion GET  que brinda los datos de la tabla jugadors del MYSQL */
router.get('/jugadores', function(req, res, next) {
    Jugadores.findAll({})
    .then(resultado => {
        res.json(resultado);
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;
