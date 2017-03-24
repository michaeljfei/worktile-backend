const mongoose = require('../mongoose');
const Schema = mongoose.Schema;

/**
 * UserInfo model 用户信息表
 * department 部门
 * job 工作
 * tell 手机
 * email 邮箱
 * avatar 头像
 * userId 关联用户ID
 */
const UserInfoSchema = new Schema({
    nickname : String,
    department : String,
    age : Number,
    job : String,
    tell : Number,
    email : String,
    avatar : String,
    userId : Schema.Types.ObjectId
});

exports.UserInfo = mongoose.model('UserInfo', UserInfoSchema);