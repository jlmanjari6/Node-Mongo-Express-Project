var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');//to parse the document
var multer = require('multer'); //for multipart form
var upload = multer();
var db =  require('./config/db') 

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Use mongodb://localhost/userdb to connect to the local mongodb, where userdb is the name of the database.
//Here, we are connecting to the mongo atlas cloud instead of local db.
mongoose.connect(db.url)
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

var index = require('./routes/index');
var registration = require('./routes/registration');

var port=3000;

var app = express();

// view engine setup
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing multipart/form-data
app.use(upload.array()); 

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/Register', registration);

//Heroku dynamically assigns our app a port, so we can't set the port to a fixed number. 
//Heroku adds the port to the env, so we can pull it from there.
//That way it'll still listen to port 300 when we test locally, but it will also work on Heroku.
app.listen(process.env.PORT || port , () => {
        console.log("Server listening on port " + port);
      });

module.exports = app;