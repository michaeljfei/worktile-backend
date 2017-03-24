const mongoose = require('../mongoose');
const Schema = mongoose.Schema;

/**
 * schedule model 项目进度表
 * name 进度名
 * state 进度状态
 * startDate 进度开始时间
 * endDate 进度结束时间
 * projId 关联的项目id
 */
const scheduleSchema = new Schema({
    name : String,
    state : String,
    startDate : Date,
    endDate : Date,
    projId : Schema.Types.ObjectId
});

exports.Schedule = mongoose.model('Schedule', scheduleSchema);