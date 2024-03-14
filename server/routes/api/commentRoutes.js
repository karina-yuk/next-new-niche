const router = require('express').Router();

const {
  getComments,
  getSingleComment,
  createComment,
  updateComment,
  deleteComment
} = require('../../controllers/commentController.js');

// /api/comments
router.route('/').get(getComments).post(createComment);

// /api/comments/:commentId
router
  .route('/:commentId')
  .get(getSingleComment)
  .put(updateComment)
  .delete(deleteComment);

module.exports = router;