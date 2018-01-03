
// defining node/module dependancies
const router = require('express').Router();
const path = require('path');
const bodyParser = require('body-parser');
const pg = require('pg');
const pool = require('../../modules/database-config');


router.get('/', function(req, res, next) {
  // pulling client side request data from headers
  let species = req.headers.species;
  let timeOfYear = req.headers.timeofyear;
  // splitting month an time zone from time string
  let timeOfYear_array = timeOfYear.split(' ');
  // 3 digit month: Jan
  let month = timeOfYear_array[1];
  // 3 digit time zone: (CST)
  let timeZone = timeOfYear_array[6];
  


});




module.exports = router;


// summer 8-12' or 30-40'
