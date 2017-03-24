const express = require('express');
const path = require('path');
const router = express.Router();
const logger = require('log4js').getLogger('[???]');

//所有页面请求重定向到index
router.get('/*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

module.exports = router;