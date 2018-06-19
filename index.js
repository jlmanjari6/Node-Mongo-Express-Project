var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var registration = require('./routes/registration');

var port=3000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/usersdb')
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

var app = express();

// view engine setup
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/Register', registration);

app.listen(port, () => {
    console.log("Server listening on port " + port);
  });

module.exports = app;