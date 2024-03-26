const router = require('express').Router();

const {
  getComments,
  getBlogpostComments,
  getSingleComment,
  createComment,
  updateComment,
  deleteComment
} = require('../../controllers/commentControlller');

// /api/comments
router
  .route('/')
  .get(getComments)
  .post(createComment);

// /api/comments/blogposts/:blogpostId
router
  .route('/blogposts/:blogpostId')
  .get(getBlogpostComments);

// /api/comments/:commentId
router
  .route('/:commentId')
  .get(getSingleComment)
  .put(updateComment)
  .delete(deleteComment);

module.exports = router;