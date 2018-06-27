

var express = require('express');

var router = express.Router();

var employeeControllerObj = require("../controllers/EmployeeController.js");
var studentControllerObj = require("../controllers/StudentController.js");

//Redirect to registration page
router.get('/', function (req, res, next) {
  res.render('Register', { title: 'Register here' });
});

// Save user
router.post('/save', function (req, res) {
  if (req.body.role == 'student') {
    studentControllerObj.save(req, res);
  }
  else {
    employeeControllerObj.save(req, res);
  }
});

module.exports = router;