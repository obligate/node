var express = require('express');
var router = express.Router();
const config = require('../config/loadconfig');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' + config.sql.sqlServer});
});

module.exports = router;
