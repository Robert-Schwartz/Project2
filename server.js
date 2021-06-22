// Required Packages
// =============================================
const routes = require('./controllers/api');
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

// Set up Express
const app = express();
const PORT = process.env.PORT || 3001;
// TODO:  we need to give this a new PORT from HEROKU

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Session
// ==============================================
const sess = {
    //replace secret in env
    secret: 'Super Secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// Use Session
app.use(session(sess));

const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
// Handlebars
// ================================================
// Helpers

// Handlebars Engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Use Controllers
app.use(require('./controllers/'));


// Listen for Port
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});