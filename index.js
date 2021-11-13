const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();
const { join } = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})