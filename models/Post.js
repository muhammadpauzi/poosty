const { DataTypes } = require('sequelize');
const User = require('./User');
const sequelize = require('../configs/database');

const Post = sequelize.define('Post', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, { timestamps: true });


module.exports = Post;