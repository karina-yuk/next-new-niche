const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongodb-session')(session);
const db = require('./config/connection');
const path = require('path');

const routes = require('./routes');

// port
const PORT = process.env.PORT || 3001;
const app = express();


const store = new MongoStore({
  uri: process.env.DB_URI,
  databaseName: 'niche',
  collection: 'sessions',
})

// Express session middleware
app.use(
  session({
  secret: '', // Change this to your own secret key
  resave: false,
  saveUninitialized: false,
  store: store, // Correct instantiation
  cookie: { maxAge: 3 * 60 * 60 * 1000 } // Session expiration time (3 hours)
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

