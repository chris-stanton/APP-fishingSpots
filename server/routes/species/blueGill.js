
const router = require('express').Router();
const pg = require('pg');
const pool = require('../../modules/database-config');

router.get('/', function(req, res) {
  // pool.connect()
  //   .then(function (client) {
  //     client.query("SELECT id, name FROM users")
  //       .then(function (result) {
  //         client.release();
  //         res.send(result.rows);
  //       })
  //       .catch(function (err) {
  //         console.log('error on SELECT', err);
  //         res.sendStatus(500);
  //       });
  console.log('hit');
    });//end of .then



module.exports = router;
