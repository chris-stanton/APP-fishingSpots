
///////////////////
// Passport file //
///////////////////

// defining node module dependancies
const session = require('express-session');

// express session settings
module.exports = session({
  secret: 'secret',
  key: 'user', // this is the name of the req.variable. 'user' is convention, but not required
  resave: 'true',
  saveUninitialized: false,
  cookie: { maxage: 60000, secure: false }
});
