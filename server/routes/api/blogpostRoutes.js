const router = require('express').Router();
const {
  getBlogposts,
  getUserBlogposts,
  getSingleBlogpost,
  createBlogpost,
  updateBlogpost,
  deleteBlogpost
} = require('../../controllers/blogpostController.js');

// /api/blogposts
router.route('/')
  .get(getBlogposts)
  .post(createBlogpost);

// /api/blogposts/:blogpostId
router
  .route('/:blogpostId')
  .get(getSingleBlogpost)
  .put(updateBlogpost)
  .delete(deleteBlogpost);

module.exports = router;