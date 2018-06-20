var mongoose = require("mongoose");

//declaring schema for our db
var employeeSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    employeeId: String,
    email: String,
    password: String,
    updatedAt: { type: Date, default: Date.Now }
});

//Here "Employee" will create a collection as "employees"(plural) under the userdb.  
module.exports = mongoose.model('Employee', employeeSchema);