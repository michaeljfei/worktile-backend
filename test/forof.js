const userCtrl = require('../controller/userController');

const router = {
    'api' : {
    '/list' : [ userCtrl.list, ['post', 'get'] ]
    }
};

for (let route in router.api) {
    let ctrl = router.api[route][0];
    let method = router.api[route][1];
    console.log(route);
    console.log(ctrl);
    console.log(method);
}