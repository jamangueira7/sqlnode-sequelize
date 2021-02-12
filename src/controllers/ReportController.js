const { Op } = require('sequelize');

const User = require('../models/User');
const Tech = require('../models/Tech');

module.exports = {
    async show(req, res) {

        const user = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@joao.com'
                }
            }
        });

        return res.json(user);
    }
}
