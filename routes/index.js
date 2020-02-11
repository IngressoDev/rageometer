var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express ABC' });
});

router.get('/rage', function(req, res, next) {
  res.sendfile('rageometer.html')
});

module.exports = router;
