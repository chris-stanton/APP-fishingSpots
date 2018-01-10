
///////////////////
// Passport file //
///////////////////

// defining node module dependancies
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const encryptLib = require('../modules/encryption');
// const connection = require('../modules/database-config.js');
const pg = require('pg');
const url = require('url');
const pool = require('../modules/database-config');

// setting config empty
let config = {};

let acquireCount = 0
pool.on('acquire', function (client) {
  acquireCount++;
  console.log('client acquired: ', acquireCount);
});

let connectCount = 0
pool.on('connect', function () {
  connectCount++;
  console.log('client connected: ', connectCount);
});
console.log('clients connected: ', connectCount);

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log('called deserializeUser - pg');

  pool.connect(function (err, client, release) {
    if(err) {
      console.log('connection err ', err);
      release();
      done(err);
    };

    let user = {};

    client.query("SELECT * FROM users WHERE id = $1", [id], function(err, result) {

      // Handles Errors
      if(err) {
        console.log('query err ', err);
        done(err);
        release();
      }
      user = result.rows[0];

      release();

      if(!user) {
        // user not found
        return done(null, false, {message: 'Incorrect credentials.'});
      } else {
        // user found
        done(null, user);
      }
    });
  });
});

// Does actual work of logging in
passport.use('local', new localStrategy({
    passReqToCallback: true,
    usernameField: 'username'
    }, function(req, username, password, done) {
	    pool.connect(function (err, client, release) {

        // assumes the username will be unique, thus returning 1 or 0 results
        client.query("SELECT * FROM users WHERE username = $1", [username],
          function(err, result) {
            // setting user to empty object
            let user = {};
            // Handle Errors from query search
            if (err) {
              console.log('error getting results from SQL query ', err);
              done(null, user);
            }

            release();
            console.log('connectCount: ', connectCount);

            // handles results from query search
            if(result.rows[0] != undefined) {
              user = result.rows[0];
              console.log('User obj: ', user);
              // Hash and compare
              if(encryptLib.comparePassword(password, user.password)) {
                // if match
                console.log('password match');
                done(null, user);
              } else {
                // if no match / error
                console.log('password does not match/error');
                done(null, false, {message: 'Incorrect credentials.'});
              }
            } else {
              console.log('user does not exist');
              done(null, false);
            }
          });
	    });
    }
));


module.exports = passport;
