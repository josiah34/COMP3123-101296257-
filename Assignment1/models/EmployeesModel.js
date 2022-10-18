const mongoose = require('mongoose');




const EmployeeSchema = mongoose.Schema({
    firstName: {
        type: String,
        length: 100,
        required: true
    },
    lastName: {
        type: String,
        length: 50,
        required: true
    },
    email: {
        type: String,
        length: 50,
        required: true,
        unique: true},
    gender: {
        type: String,
        length: 25,
    },
    salary:{
        type: Number,
        required: true
    }


})

module.exports = mongoose.model('Employee', EmployeeSchema);