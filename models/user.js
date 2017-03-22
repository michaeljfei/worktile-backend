const mongoose = require('../mongoose');
const Schema = mongoose.Schema;

//配置User表结构

const UserSchema = new Schema({
    name : String,
    psw : String,
    loginDate : Date
})

exports.User = mongoose.model('User', UserSchema);