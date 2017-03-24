const mongoose = require('../mongoose');
const Schema = mongoose.Schema;

/**
 * Project model 项目表
 * name 项目名称
 * type 项目类型
 * manager 项目负责人ID
 * state 项目状态
 * tag 项目标签
 * eStartDate 项目预计开始时间
 * eEndDate 项目预计结束时间
 * startDate 项目实际开始时间
 * endDate 项目实际结束时间
 */
const ProjectSchema = new Schema({
    name : String,
    type : String,
    manager : Schema.Types.ObjectId,
    state : String,
    tag : [],
    eStartDate : Date,
    eEndDate : Date,
    startDate : Date,
    endDate : Date,
    updateDate : Date
});

exports.Project = mongoose.model('Project', ProjectSchema);