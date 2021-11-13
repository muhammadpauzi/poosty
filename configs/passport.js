const { User } = require('../models');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

module.exports = (passport) => {
    passport.use(new LocalStrategy(async (username, password, done) => {
        try {
            const user = await User.findOne({ where: { username } });
            if (!user) return done(null, false);
            if (!bcrypt.compareSync(password, user.password)) return done(null, false);
            return done(null, user.toJSON());
        } catch (error) {
            console.log(error);
            done(error);
        }
    }))
}