
// defining node module dependancies
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('./server/strategies/user_sql.js');
const sessionConfig = require('./server/modules/session.config.js');

// defining auth DB routes
const index = require('./server/routes/auth/index.js');
const user = require('./server/routes/auth/user.js');
const register = require('./server/routes/auth/register.js');

// defining weather API route
const weather = require('./server/routes/weather.js');

// defining species DB routes
const blueGill = require('./server/routes/species/blueGill.js');
const blackCrappie = require('./server/routes/species/blackCrappie.js');
const whiteCrappie = require('./server/routes/species/whiteCrappie.js');
const perch = require('./server/routes/species/perch.js');
const walleye = require('./server/routes/species/walleye.js');
const northernPike = require('./server/routes/species/northernPike.js');
const musky = require('./server/routes/species/musky.js');
const burbot = require('./server/routes/species/burbot.js');



// serve back static files
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// handle index file separately
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// passport session configuration
app.use(sessionConfig);

// starts up passport session
app.use(passport.initialize());
app.use(passport.session());

// auth routes
app.use('/register', register);
app.use('/user', user);
// weather API route
app.use('/weather', weather);
// species routes
app.use('/blueGill', blueGill);
app.use('/blackCrappie', blackCrappie);
app.use('/whiteCrappie', whiteCrappie);
app.use('/perch', perch);
app.use('/walleye', walleye);
app.use('/northernPike', northernPike);
app.use('/musky', musky);
app.use('/burbot', burbot);
// catch/else route
app.use('/*', index);

// port listening on
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log('Listening on port: ', app.get('port'));
});
