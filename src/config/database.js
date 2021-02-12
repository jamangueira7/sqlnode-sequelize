module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'sqlnode_sequelize',
    define: {
        timestamp: true,
        underscored: true,
    },
};
