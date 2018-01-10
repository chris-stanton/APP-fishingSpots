
// Dependancies
const router = require('express').Router();
const pg = require('pg');
const request = require('request');
require('dotenv').config()

router.get('/getWeather', function (req, res) {
  let lat = req.headers.lat;
  let long = req.headers.long;

  // create gobal var within heroku om next deploy
  request('https://api.darksky.net/forecast/' + process.env.DARK_SKY_KEY + '/' + lat + ',' + long, function (error, response, body) {
    res.send(body);
  });
});




module.exports = router;
