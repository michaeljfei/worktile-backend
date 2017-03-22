const config = {
    DB_URL : 'mongodb://localhost:27017/worktile',
    PORT : 3100,
    log4js : {
        appenders : [
            { type : 'console' }
        ]
    }
};

module.exports = config;

