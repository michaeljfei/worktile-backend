const express = require('express');
const path = require('path');
const http = require('http');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const log4js = require('log4js');
const mongoose = require('mongoose');

//引入配置
const config = require('./config');
const indexRoute = require('./router/index');
const apiRoute = require('./router/api');
const { normalizePort, onError, onListening } = require('./utils/http');

//初始化app
const app = express();
const server = http.createServer(app);

//日志中间件配置
log4js.configure(config.log4js);
const logger = log4js.getLogger('normal');
logger.setLevel(log4js.levels.INFO);



//中间件配置
app.use(log4js.connectLogger(logger, { level : log4js.levels.INFO }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//路由配置
app.use('/*', indexRoute);
app.use('/api', apiRoute);

//捕获404错误并向下传递
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//dev环境错误处理
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        logger.error(`[status] : ${ res.statusCode }  [message] : ${ err.message }`);
        res.send(`[status] : ${ res.statusCode }  [message] : ${ err.message }`);
    });
}

//生产环境错误处理
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(`[status] : ${ res.statusCode }  [message] : ${ err.message }`);
});

//设置端口
const port = normalizePort(config.PORT || 3000);
app.set('port', port);

//服务配置
server.listen(port, () => {
   logger.info(`Server is running on port : ${ port }`);
});
server.on('error', onError);
server.on('listening', onListening);