var express = require('express');
var router = express.Router();

var loginControllerObj = require("../controllers/LoginController.js");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('Index', { title: 'Welcome' });
});

// Validate user credentials
router.post('/login', function (req, res) {
  loginControllerObj.login(req, res);
});


module.exports = router;