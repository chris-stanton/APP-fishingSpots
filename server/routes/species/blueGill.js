
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
  // creating current tim object
  let currentTime = {
    month,
    timeZone
  }

  // get queries based off users current time zone
  if(timeZone === '(EST)') {
    // Eastern Standard Time
    console.log('users is in EST timezone');
  } else if(timeZone === '(EDT)') {
    // Eastern Daylight Time
    console.log('users is in EDT timezone');
  } else if(timeZone === '(CST)') {
    // Centeral Standard Time
    console.log('users is in CST timezone');
  } else if(timeZone === '(CDT)') {
    // Central Daylight Time
    console.log('users is in CDT timezone');
  } else if(timeZone === '(AST)') {
    // Atlantic Standard time
    console.log('users is in AST timezone');
  } else if(timeZone === '(MST)') {
    // Mountain Standard Time
    console.log('users is in MST timezone');
  } else if(timeZone === '(MDT)') {
    // Mountain Daylight Time
    console.log('users is in MDT timezone');
  } else if(timeZone === '(PST)') {
    // Pacific Stadard Time
    console.log('users is in PST timezone');
  } else if(timeZone === '(PDT)') {
    // Pacific Daylight Time
    console.log('users is in PDT timezone');
  } else {
    // Could not find users timezone
    console.log('could not find users timezone match');
    res.sendStatus(500);
  }







}); // end router.get




module.exports = router;


// summer 8-12' or 30-40'
