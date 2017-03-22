const mongoose = require('../mongoose');
const Schema = mongoose.Schema;

//配置User表结构

const UserSchema = new Schema({
    username : String,
    password : String,
    loginDate : Date
})

exports.User = mongoose.model('User', UserSchema);