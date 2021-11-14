const moment = require('moment');

module.exports = {
    fromNow: function (date) {
        return moment(date).fromNow();
    }
};