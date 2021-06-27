const express = require('express');
const Handlebars = require('handlebars')
const routes = require('./controllers');
const path = require('path');
const sequelize = require("./config/connection");
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')



// Session
// ==============================================

const sess = {
    secret: 'Super Secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

const app = express();
const PORT = process.env.PORT || 3001;

// Use Session
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// Handlebars Engine
app.set('view engine', 'handlebars');

app.engine('handlebars', exphbs({ handlebars: allowInsecurePrototypeAccess(Handlebars) }))

app.use(routes);

// Listen for Port
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});