const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const db = require('./config/connection');
const path = require('path');

const routes = require('./routes');

// port
const PORT = process.env.PORT || 3001;
const app = express();

// Express session middleware
app.use(session({
    secret: 'your_secret_key', // Change this to your own secret key
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 3 * 60 * 60 * 1000 } // Session expiration time (3 hour)
}));

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// start database server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

