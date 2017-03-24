const mongoose = require('../mongoose');
const Schema = mongoose.Schema;

/**
 * Weekly model 周报表
 * title 标题
 * content 内容
 * startDate 周报开始日期
 * endDate 周报结束日期
 * author 周报作者关联Id
 */
const WeeklySchema = new Schema({
    title : String,
    content : String,
    startDate : Date,
    endDate : Date,
    author : Schema.Types.ObjectId
});

exports.Weekly = mongoose.model('Weekly', WeeklySchema);