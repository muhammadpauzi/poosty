const User = require('./User');
const Post = require('./Post');

User.sync().then(() => console.log("Table User Created!"));
Post.sync().then(() => console.log("Table Post Created!"));
// User.sync({ force: true }).then(() => console.log("Table User Created!"));
// Post.sync({ force: true }).then(() => console.log("Table Post Created!"));

User.hasMany(Post);
Post.belongsTo(User);

module.exports = {
    User,
    Post
}