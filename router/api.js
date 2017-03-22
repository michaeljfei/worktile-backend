const express = require('express');
const path = require('path');
const router = express.Router();
const { User } = require('../models/user');
const api = require('./routes').api;
const logger = require('log4js').getLogger('[mongoDB]');
const _ = require('lodash');

/*router.all('/', async (req, res, next) => {

    let user = new User({
        name : 'Michael',
        psw : '123456',
        loginDate: new Date()
    });

    try {
        let result = await user.save();
        logger.info(result);
        res.json(result);

    } catch (e) {
        logger.error(e);
        res.send(e);
    }

});*/

for (let route in api) {
    let ctrl = api[route][0];
    let methods = api[route][1] || [];

    //只有一种方式则单独输出
    if (methods.length === 1) {
        router[methods](route, ctrl);
    }

    //有多个方式则进行遍历输出
    else if(methods.length > 1) {
        for (let method of methods) {
            router[method](route, ctrl);
        }
    }

    //未设置请求方式默认均为post
    else {
        router['post'](route, ctrl);
    }
}

module.exports = router;