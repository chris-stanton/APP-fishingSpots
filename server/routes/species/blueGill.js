
// defining node/module dependancies
const router = require('express').Router();
const path = require('path');
const bodyParser = require('body-parser');
const pg = require('pg');
const pool = require('../../modules/database-config');




router.get('/', function(req, res, next) {
  let timeOfYear = req.headers.timeOfYear;
  let species = req.headers.species;

  console.log('blueGill route hit', req.headers);
  
});




module.exports = router;


// summer 8-12' or 30-40'
