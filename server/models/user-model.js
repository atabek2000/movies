const {Schema, mode} = require('mongoose');


const UserSchema = new Schema({
    logon: {type: String, unique: true, required: true},
    password: {type: String, required: true}  
})