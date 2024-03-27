const { User, Blogpost } = require('../models');
const { requireAuth } = require('../utils/authMiddleware');

module.exports = {
  // get all blogposts
  async getBlogposts(req, res) {
    try {
      const blogposts = await Blogpost.find();
      res.json(blogposts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // get all blogposts by a user
  // async getUserBlogposts(req, res) {
  //   try {
  //     const user = await User.findOne({ _id: req.params.userId });
  //     if (!user) {
  //       return res.status(404).json({ message: 'User not found' });
  //     }

  //     const blogposts = await Blogpost.find({ userId: req.params.userId });
  //     res.json(blogposts);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },

  // get single blogpost
  async getSingleBlogpost(req, res) {
    try {
      const blogpost = await Blogpost.findById(req.params.blogpostId)
        .populate('comments');

      if (!blogpost) {
        return res.status(404).json({ message: 'Blogpost not found' });
      }

      res.json(blogpost);
    } catch (err) {
      res.status(500).json(err);
    }
  },

// create a blogpost
async createBlogpost(req, res) {
  try {
    const blogpost = await Blogpost.create({...req.body});
    res.json({ message: 'New blogpost created', blogpost });
  } catch (err) {
    console.log('Error:', err);
    res.status(500).json(err);
  }
},

  // update a blogpost
  async updateBlogpost(req, res) {
    try {
      const blogpost = await Blogpost.findOneAndUpdate(
        { _id: req.params.blogpostId },
        { $set: req.body },
        { new: true, runValidators: true }
      );

      if (!blogpost) {
        return res.status(404).json({ message: 'Blogpost not found' });
      }

      res.json({ message: 'Blogpost updated', blogpost});
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete a blogpost
  async deleteBlogpost(req, res) {
    try {
      const blogpost = await Blogpost.findOneAndDelete({ _id: req.params.blogpostId });

      if (!blogpost) {
        return res.status(404).json({ message: 'Blogpost not found' });
      }

      res.json({ message: 'Blogpost deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};