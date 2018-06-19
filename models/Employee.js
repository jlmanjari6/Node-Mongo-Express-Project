var mongoose = require("mongoose");

var employeeSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    employeeId: String,
    email: String,
    password: String,
    updatedAt: { type: Date, default: Date.Now }
});

module.exports = mongoose.model('Employee', employeeSchema);