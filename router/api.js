const express = require('express');
const router = express.Router();
const api = require('./routes').api;

for (let route in api) {

    let [ ctrl, methods = ['post'] ] = api[route];

    //只有一种方式则单独输出
    if (methods.length === 1) {
        router[methods](route, ctrl);
    }

    //有多个方式则进行遍历输出
    else {
        for (let method of methods) {
            router[method](route, ctrl);
        }
    }

}

module.exports = router;