var mongoose = require("mongoose");

mongoose.set('debug', true);


var url =  process.env.MONGODB_URL || 'mongodb://localhost/todos-api';
mongoose.connect(url);
mongoose.Promise = Promise;

module.exports.Todo = require("./todo")