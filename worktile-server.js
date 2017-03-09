const express = require('express');
const path = require('path');
const http = require('http');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//引入配置
const config = require('./config');
const indexRoute = require('./router/index');
const { normalizePort, onError, onListening } = require('./utils/http');

//初始化app
const app = express();
const server = http.createServer(app);

//中间件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//路由配置
app.use('/', indexRoute);

//数据库配置
mongoose.connect(config.DB_URL);
mongoose.Promise = require('bluebird');
mongoose.connection
    .on('connected', () => {
    console.log('Mongoose connection open to ' + config.DB_URL);
})
    .on('error', err => {
    console.log('Mongoose connection error: ' + err);
})
    .on('disconnected', () => {
    console.log('Mongoose connection disconnected');
});


// 捕获404错误并向下传递
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// dev环境错误处理
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        console.log('[err status]:', err.status);
        res.status(err.status || 500);
        res.send(`[status] : ${ err.status }  [message] : ${ err.message }`);
    });
}

//生产环境错误处理
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(`[status] : ${ err.status }  [message] : ${ err.message }`);
});

//设置端口
const port = normalizePort(config.PORT || 3000);
app.set('port', port);

//服务配置
server.listen(port, () => {
   console.log(`Server is running on port : ${ port }`);
});
server.on('error', onError);
server.on('listening', onListening);




