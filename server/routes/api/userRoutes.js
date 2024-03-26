const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  loginUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(loginUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
