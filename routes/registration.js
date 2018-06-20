

var express = require('express');

var router = express.Router();

var employeeControllerObj = require("../controllers/EmployeeController.js");

//Redirect to registration page
router.get('/', function(req, res, next) {
  res.render('Register', { title: 'Register here' });
});

// Save user
router.post('/save', function(req, res) {
    console.log(req.body);
    employeeControllerObj.save(req, res);
  });

module.exports = router;