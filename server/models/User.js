
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 10,
    lowercase: true,
    match: [/.+@.+\..+/, 'Valid email address required Bucko!'],
  },
  username: {
    type: String,
    default: this.email,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    default: this.password,
  },
  subscribed: {
    type: Boolean,
    default: false,
  },
},
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  });

// Hash password before saving to database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const hashedPassword = bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = model('User', userSchema); // becomes 'users' collection


module.exports = User;
