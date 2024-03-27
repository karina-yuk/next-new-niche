const { User, Blogpost } = require('../models');
const bcrypt = require('bcrypt');
const session = require('express-session');

module.exports = {
  // get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // get single user
  async getSingleUser(req, res) {
    try {
      const user = await User.find({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

// Login route
async loginUser(req, res) {
  try {
    const { username, email, password } = req.body; // Extract email and password from request body

    // Check if user exists
    const user = await User.findOne({ username, email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid username or email' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid password' });
    }

    // Create session
    req.session.user = user; // Assuming session middleware is properly configured

    res.json({ message: 'Login successful' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
},


 // create a user
async createUser(req, res) {
  try {
    const { username, email, password, confirmPassword } = req.body;
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
    
    // Create user with hashed password
    const user = await User.create({ username, email, password: hashedPassword, confirmPassword});
    
    res.json({ message: 'New user created', user });
  } catch (err) {
    res.status(500).json(err);
  }
},


// update a user
async updateUser(req, res) {
  try {
    // Check if there's a password in the request body
    if (req.body.password) {
      // Hash the password
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    // Update the user in the database
    const user = await User.findOneAndUpdate({ _id: req.params.userId }, req.body, {
      new: true,
      runValidators: true,
    });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send the updated user object in the response
    res.json({ message: 'User updated', user});
  } catch (err) {
    res.status(500).json(err);
  }
},


  // delete a user and their blogposts
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'student not found' });
      }

      const blogposts = await Blogpost.deleteMany({ _id: { $in: user.blogposts } });

      if (!blogposts) {
        return res.status(404).json({ message: 'user deleted and no blogposts found' });
      }

      res.json({ message: 'User and blogposts deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Logout route
  async logoutUser(req, res) {
    try {
      req.session.destroy();
      res.json({ message: 'Logout successful' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
};