const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Like = sequelize.define('Like', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { timestamps: true });


module.exports = Like;