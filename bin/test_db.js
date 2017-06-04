var Book = require("../models/book")
var Genre = require("../models/genre")
var Author = require("../models/author")
var BookInstance = require("../models/bookinstance")
//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://chvsai:abcxyz123@ds143241.mlab.com:43241/local_library_mdn';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

console.log(Book.length)
//console.log(Book)
Book.find({ 'genre': '5919ad999cfe8013e21a5f02' },'title summary')
      .exec(function(err,data){
          if(err) return err
          console.log(data)
      });