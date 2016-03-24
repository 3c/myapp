'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
  name:String ,  //定义一个属性name，类型为String
  phone:String
});

exports.user = mongoose.model('Person', PersonSchema); //  与users集合关联

