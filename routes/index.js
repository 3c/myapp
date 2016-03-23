var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//goodItem
router.get('/good-item', function(req, res, next) {
  res.send("{\"name\":\"good\"}");
});

router.post('/shop-detail', function(req, res, next) {
  res.send("{\"name\":\"shop\"}");
});

module.exports = router;
