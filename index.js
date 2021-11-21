require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const { join } = require('path');
const db = require('./configs/database');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 5000;
const sessionStore = new SequelizeStore({
    db: db,
    checkExpirationInterval: 15 * 60 * 1000,
    expiration: 7 * 24 * 60 * 60 * 1000
});

// set extenstion of handlebars
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs', helpers: require('./helpers/handlebars') }));
app.set('view engine', '.hbs');

app.use(express.static(join(__dirname, 'public')));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false,
    store: sessionStore
}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

require('./configs/passport')(passport);

// routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/auth'));
app.use('/posts', require('./routes/posts'));
app.use('/users', require('./routes/users'));
app.use('/profile', require('./routes/profile'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})