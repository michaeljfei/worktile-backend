const mongoose = require('../mongoose');
const Schema = mongoose.Schema;

/**
 * Notification model 消息通知表
 * title 标题
 * content 内容
 * sender 发送人
 * sendee 接收人
 */
const NotificationSchema = new Schema({
    title : String,
    content : String,
    sender : Schema.Types.ObjectId,
    sendee : Schema.Types.ObjectId
});

exports.Notification = mongoose.model('Notification', NotificationSchema);