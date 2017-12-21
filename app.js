
// defining node/module dependancies
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('./server/strategies/user_sql.js');
const sessionConfig = require('./server/modules/session.config.js');

// defining auth routes
const index = require('./server/routes/auth/index.js');
const user = require('./server/routes/auth/user.js');
const register = require('./server/routes/auth/register.js');

// defining other route files
const init = require('./server/routes/init.js');


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
// other routes
app.use('/init', init);
// catch
app.use('/*', index);


// port listening on
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log('Listening on port: ', app.get('port'));
});
