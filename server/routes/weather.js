
// Dependancies
const router = require('express').Router();
const pg = require('pg');
const request = require('request');

router.get('/getWeather', function (req, res) {
  request('https://api.darksky.net/forecast/f754c9bf44ea140ae951b2bee0fbe48c/37.8267,-122.4233', function (error, response, body) {
    res.send(body);
  });
});








module.exports = router;
