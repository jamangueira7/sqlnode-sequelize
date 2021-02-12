module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'sqlnode',
    define: {
        timestamp: true,
        underscored: true,
    },
};
