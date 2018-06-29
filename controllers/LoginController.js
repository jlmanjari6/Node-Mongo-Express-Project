
var Student = require('../models/Student'); //refererring to the Student.js(filename) in the models folder.
var Employee = require('../models/Employee'); //refererring to the Employee.js(filename) in the models folder.

var loginController = {};

// validate credentials
loginController.login = function (req, res) {
    var emailval = req.body.usermail;
    var pwdval = req.body.userpwd;
    findStudent(emailval, pwdval, res);
};

var findStudent = function (emailval, pwdval, res) {

    Student.findOne({ 'email': emailval, 'password': pwdval }, function (err, responseFromDb) {
        if (err) {
            console.log("Something went wrong. Please try again later!");
            return;
        }
        else {
            if (responseFromDb != null && responseFromDb.email == emailval && responseFromDb.password == pwdval)
                res.redirect("/StudentDashboard");
            else
                findEmployee(emailval, pwdval, res);
        }
    });
}

var findEmployee = function (emailval, pwdval, res) {
    Employee.findOne({ 'email': emailval, 'password': pwdval }, function (err, responseFromDb) {
        if (err) {
            console.log("Something went wrong. Please try again later!");
            return;
        }
        else {
            if (responseFromDb != null && responseFromDb.email == emailval && responseFromDb.password == pwdval)
                res.redirect("/EmployeeDashboard");
            else
                res.redirect("/Register");//User account not found, please register
        }
    });
}

module.exports = loginController;