const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');
const Post = require('./Post');
const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(256),
        allowNull: false,
    }
}, { timestamps: true });


User.beforeCreate(async (user, options) => {
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
});


module.exports = User;