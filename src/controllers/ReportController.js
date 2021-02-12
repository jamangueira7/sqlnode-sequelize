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
            },
            include: [
                { association: 'addresses', where: { street: 'Rua X'} },
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    },
                },
            ]
        });

        return res.json(user);
    }
}
