const { User, Comment, Blogpost } = require('../models');
const { requireAuth } = require('../utils/authMiddleware');

module.exports = {
  // get all comments
  async getComments(req, res) {
    try {
      const comments = await Comment.find();
      res.json(comments);
    } catch (err) {
      console.log('Error:', err);
      res.status(500).json(err);
    }
  },

  // get all comments on a blogpost
  async getBlogpostComments(req, res) {
    try {
      const blogpost = await Blogpost.findOne({ _id: req.params.blogpostId });
      if (!blogpost) {
        return res.status(404).json({ message: 'Blogpost not found' });
      }

      const comments = await Comment.find({ blogpostId: req.params.blogpostId });
      res.json(comments);
    } catch (err) {
      console.log('Error:', err);
      res.status(500).json(err);
    }
  },

  // get single comment
  async getSingleComment(req, res) {
    try {
      const comment = await Comment.findById(req.params.commentId);
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
      res.json(comment);
    } catch (err) {
      console.log('Error:', err);
      res.status(500).json(err);
    }
  },

// create a comment
async createComment(req, res) {
  try {
    await requireAuth(req, res); // check if user is authenticated
    const user = await User.findOne({ _id: req.body.userId });
    const blogpost = await Blogpost.findOne({ _id: req.body.blogpostId });
    const comment = await Comment.create({ ...req.body, username: user.username, blogpostId: blogpost._id });

    // add comment to blogpost
    blogpost.comments.push(comment);
    await blogpost.save();

    res.json({ message: 'New comment created', comment });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
},


  // update a comment
  async updateComment(req, res) {
    try {
      await requireAuth(req, res); // check if user is authenticated
      const comment = await Comment.findOneAndUpdate(
        { _id: req.params.commentId },
        { $set: req.body },
        { new: true, runValidators: true }
      );
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
      res.json({ message: 'Comment updated', comment });

      // update comment in blogpost
      const blogpost = await Blogpost.findOne({ _id: comment.blogpostId });
      const commentIndex = blogpost.comments.findIndex(c => c._id === comment._id);
      blogpost.comments[commentIndex] = comment;
      await blogpost.save();

    } catch (err) {
      console.log('Error:', err);
      res.status(500).json(err);
    }
  },

  // delete a comment
  async deleteComment(req, res) {
    try {
      await requireAuth(req, res); // check if user is authenticated
      const comment = await Comment.findOneAndDelete({ _id: req.params.commentId });
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
      res.json({ message: 'Comment deleted', comment });

      // delete comment from blogpost
      const blogpost = await Blogpost.findOne({ _id: comment.blogpostId });
      blogpost.comments.pull(comment);
      await blogpost.save();
      
    } catch (err) {
      console.log('Error:', err);
      res.status(500).json(err);
    }
  },
};