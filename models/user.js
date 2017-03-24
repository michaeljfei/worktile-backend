const mongoose = require('../mongoose');
const Schema = mongoose.Schema;

/**
 * User model 用户表
 * username 用户名
 * password 密码
 * loginDate 登陆日期
 */
const UserSchema = new Schema({
    username : String,
    password : String,
    loginDate : Date
});

exports.User = mongoose.model('User', UserSchema);