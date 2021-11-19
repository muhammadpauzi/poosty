const moment = require('moment');

module.exports = {
    fromNow: function (date) {
        return moment(date).fromNow();
    },
    len: function (data) {
        return data.length;
    },
    plural: function (value, singularText) {
        return value == 1 ? singularText : singularText + 's';
    },
    isLiked: function (currentUserId, data) {
        let isLiked = false;
        data.Likes.forEach(like => {
            console.log(like.user_id, currentUserId);
            if (like.user_id == currentUserId) {
                isLiked = true;
                return true;
            }
        });
        return isLiked;
    },
    isSame: function (value1, value2) {
        return value1 == value2;
    }
};