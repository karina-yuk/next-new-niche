const { User, Blogpost } = require('../models');

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
async loginUser (req, res) {
  try {
    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Return JWT token or session token
    res.json({ msg: 'Login successful' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
},

  // create a user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json({ message: 'New user created', user });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate({ _id: req.params.userId }, req.body, {
        new: true,
        runValidators: true,
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
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
};