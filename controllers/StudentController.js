
var Student = require('../models/Student') //refererring to the Student.js(filename) in the models folder.

var studentController = {};

// Save new student
studentController.save = function(req, res) {

    var student = new Student(req.body);
    student.save(function(err) {
        if(err) {
          console.log(err);
          res.render("../views/Register");
        } else {
          console.log("Successfully created a student.");
          res.redirect("/");
        }
      });
  };

module.exports = studentController;