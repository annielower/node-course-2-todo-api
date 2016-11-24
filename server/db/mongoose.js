var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApplication');

module.exports = {mongoose} //es6 mongoose: mongoose
