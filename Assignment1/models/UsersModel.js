const mongoose = require('mongoose')





const UserSchema = mongoose.Schema({
    username: 
    { 
        type: String, 
        required: true, 
        unique: true,
        length: 50 }
    ,
    password: {
        type: String,
        required: true,
        length: 50

    }
})


module.exports = mongoose.model('User', UserSchema);

