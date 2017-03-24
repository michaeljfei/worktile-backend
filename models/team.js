const mongoose = require('../mongoose');
const Schema = mongoose.Schema;

/**
 * Team model 项目组表
 * name 项目组名称
 * state 项目组状态
 * projId 关联项目Id
 */
const TeamSchema = new Schema({
    name : String,
    state : String,
    projId : Schema.Types.ObjectId
});

exports.Team = mongoose.model('Team', TeamSchema);