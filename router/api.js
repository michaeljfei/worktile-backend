const express = require('express');
const path = require('path');
const router = express.Router();
const { User } = require('../models/user');
const logger = require('log4js').getLogger('[mongoDB]');

router.post('/', async (req, res, next) => {

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

});

module.exports = router;