const { User, Comment, Blogpost } = require('../models');

module.exports = {
  // get all comments
  async getComments(req, res) {
    try {
      const comments = await Comment.find();
      res.json(comments);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // get single comment
  async getSingleComment(req, res) {},
  async createComment(req, res) {},
  async updateComment(req, res) {},
  async deleteComment(req, res) {},
};