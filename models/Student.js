var mongoose = require("mongoose");

//declaring schema for our db
var studentSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    studentId: String,
    email: String,
    password: String,
    updatedAt: { type: Date, default: Date.Now }
});

//Here "student" will create a collection as "students"(plural) under the userdb.  
module.exports = mongoose.model('Student', studentSchema);