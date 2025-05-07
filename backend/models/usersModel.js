const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber: String
})

module.exports =  mongoose.model("Users", UserSchema);
