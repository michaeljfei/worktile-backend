/**
 * Created by FEI on 2017/3/22.
 */
const mongoose = require('mongoose');
const Promise = require('bluebird');
const logger = require('log4js').getLogger('[MongoDB]');

const config = require('./config');

//数据库配置
mongoose.connect(config.DB_URL);
mongoose.Promise = Promise;
mongoose.connection
    .on('connected', () => {
        logger.info('Mongoose connection open to ' + config.DB_URL);
    })
    .on('error', err => {
        logger.error('Mongoose connection error: ' + err);
    })
    .on('disconnected', () => {
        logger.info('Mongoose connection disconnected');
    });

module.exports = mongoose;