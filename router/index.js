const express = require('express');
const path = require('path');
const router = express.Router();

//所有页面请求重定向到index
router.get('/', (req, res, next) => {
    res.sendFile('index.html');
});

module.exports = router;