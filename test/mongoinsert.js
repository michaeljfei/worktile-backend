const { User } = require('../models/user');

const user = new User({
    name : 'Michael',
    psw : '123',
    loginDate : new Date()
});

async function insert () {
    let result = await user.save();
    console.log(result);
}

insert();