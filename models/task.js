const mongoose = require('../mongoose');
const Schema = mongoose.Schema;

/**
 * Task model 任务表
 * name 任务名
 * description 任务描述
 * state 任务状态
 * tag 任务标签
 * group 任务工作组（存放参与任务的成员Id）
 * projId 关联的项目Id
 */
const TaskSchema = new Schema({
    name : String,
    description : String,
    state : String,
    tag : [],
    mate : Schema.Types.ObjectId,
    projId : Schema.Types.ObjectId
});

exports.Task = mongoose.model('Task', TaskSchema);