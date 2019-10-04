const Sequelize = require('sequelize');
const db = require('../config/db');

const Users = db.define('users', {
    name: {
        type: Sequelize.STRING
    },
    firstname: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
});

module.exports = Users;