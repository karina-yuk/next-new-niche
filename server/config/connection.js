
require('dotenv').config();


const mongoose = require('mongoose');
// in .env file:
// MONGODB_URI = <secret_string_from_Harry_sent_on_slack>
const connStr = process.env.MONGODB_URI;
mongoose.connect(connStr);


module.exports = mongoose.connection;
