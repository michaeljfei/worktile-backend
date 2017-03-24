const mongoose = require('../mongoose');
const Schema = mongoose.Schema;

/**
 * TeamMate model 项目组成员表
 * mate 关联成员Id
 * joinDate 加入时间
 * projId 退出时间
 */
const TeamMateSchema = new Schema({
    mate : Schema.Types.ObjectId,
    joinDate : Date,
    outDate : Date
});

exports.TeamMate = mongoose.model('Team', TeamMateSchema);