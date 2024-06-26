const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogpostRoutes = require('./blogpostRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/comments', commentRoutes);
router.use('/blogposts', blogpostRoutes);
router.use('/users', userRoutes);

module.exports = router;
