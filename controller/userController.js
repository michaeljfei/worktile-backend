const { User } = require('../models/user');
const logger = require('log4js').getLogger('[UserContorller]');

module.exports = {
    test : async (req, res, next) => {
        let user = new model.User({
            username : 'Michael',
            password : '111111',
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
    },

    addUser : async (req, res, next) => {

    },

    list : async (req, res, next) => {
        let result = await User.find();
        res.json(result);
    }
}