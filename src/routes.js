const express = require('express');

const WeatherController = require('./controller/WeatherController');

const routes = express.Router();


routes.get('/weather', WeatherController.index);

module.exports = routes;