
// defining node/module dependancies
const router = require('express').Router();
const path = require('path');
const bodyParser = require('body-parser');
const pg = require('pg');
const pool = require('../../modules/database-config');


router.get('/', function(req, res, next) {
  // pulling client side request data from headers request
  let species = req.headers.species;
  let timeOfYear = req.headers.timeofyear;

  // splitting month an time zone from time string
  let timeOfYear_array = timeOfYear.split(' ');
  // 3 digit month: Jan
  let month = timeOfYear_array[1];
  console.log('month ', month);
  // 3 digit time zone: (CST)
  let timeZone = timeOfYear_array[6];
  // creating users current time object
  let currentTime = {
    month,
    timeZone
  }

  // doing something with users timezone
  if(timeZone === '(EST)') {
    // Eastern Standard Time
    console.log('users is in EST timezone');
    if (month === 'Jan') {
      // if january
      console.log('User selected Jan month');
    } else if(month === 'Feb') {
      // if February
      console.log('User selected Feb month');
    } else if(month === 'Mar') {
      // if March
      console.log('User selected Mar month');
    } else if(month === 'Apr') {
      // if April
      console.log('User selected Apr month');
    } else if(month === 'May') {
      // if May
      console.log('User selected May month');
    } else if(month === 'Jun') {
      // if June
      console.log('User selected Jun month');
    } else if(month === 'Jul') {
      // if July
      console.log('User selected Jul month');
    } else if(month === 'Aug') {
      // if August
      console.log('User selected Aug month');
    } else if(month === 'Sep') {
      // if September
      console.log('User selected Sep month');
    } else if(month === 'Oct') {
      // if October
      console.log('User selected Oct month');
    } else if(month === 'Nov') {
      // if November
      console.log('User selected Nov month');
    } else if(month === 'Dec') {
      // if December
      console.log('User selected Dec month');
    } else {
      console.log('could not find users month match');
      res.sendStatus(500);
    }
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
    console.log('could not find users timezone match, user need to be on earth!');
    res.sendStatus(500);
  }




}); // end router.get




module.exports = router;


// summer 8-12' or 30-40'
