
const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        minLength: 10,
        required: true,
        lowercase: true,
    },
    subscribed: {
        type:Boolean,
        default: false,
    }
});

const User = model('User', userSchema); // becomes 'users' collection


module.exports = User;
