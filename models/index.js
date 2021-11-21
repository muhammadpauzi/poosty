const User = require('./User');
const Post = require('./Post');
const Like = require('./Like');

User.hasMany(Post);
User.hasMany(Like);
Post.belongsTo(User);
Post.hasMany(Like);
Like.belongsTo(Post);

// User.sync().then(() => console.log("Table User Created!"));
// Post.sync().then(() => console.log("Table Post Created!"));
// Like.sync().then(() => console.log("Table Like Created!"));
User.sync({ force: true }).then(() => console.log("Table User Created!"));
Post.sync({ force: true }).then(() => console.log("Table Post Created!"));
Like.sync({ force: true }).then(() => console.log("Table Like Created!"));


module.exports = {
    User,
    Post,
    Like
}