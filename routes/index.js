var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/m_users').user;
mongoose.connect('mongodb://localhost/goumin');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add_user', function(req, res, next) {
  res.render('add_user', { title: 'Add User' });
});

router.post('/adduser', function(req, res, next) {
  var person = new User(req.body);
  console.log('person is '+person);
  person.save();

  res.send('ok');
});


module.exports = router;
