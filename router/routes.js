const userCtrl = require('../controller/userController');

module.exports = {
  'api' : {
      '/' : [ userCtrl.test ],
      '/list' : [ userCtrl.list, ['post']]
  }
};