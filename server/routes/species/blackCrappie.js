
const router = require('express').Router();
const path = require('path');
const bodyParser = require('body-parser');
const pg = require('pg');
const pool = require('../../modules/database-config');


router.put('/', function(req, res, next) {
  let timeOfYear = req.body
  console.log('route hit', timeOfYear);
});

module.exports = router;
