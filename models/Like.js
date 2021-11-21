const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Like = sequelize.define('Like', {}, { timestamps: true });


module.exports = Like;