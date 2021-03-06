var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/m_users').user;
var db = mongoose.connect('mongodb://localhost/goumin');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/userlist');
});

router.get('/add_user', function(req, res, next) {
  res.render('add_user', { title: 'Add User' });
});

router.post('/adduser', function(req, res, next) {
  var person = new User(req.body);
  console.log('person is '+person);
  person.save();

  res.redirect('/userlist');

});


router.get('/userlist', function(req, res, next) {

  User.find(function(err,persons){
      //查询到的所有person
      console.log('person list is '+persons);

	  res.render('userlist', {
	                "userlist" : persons
	            });	
    });


});

router.get('/v1/userlist', function(req, res, next) {

  User.find({},'-_id name phone',function(err,persons){
      //查询到的所有person
      console.log('person list is '+persons);
      res.send(persons);
    });


});


module.exports = router;
