const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  loginUser,
  createUser,
  updateUser,
  deleteUser,
  logoutUser
} = require('../../controllers/userController');

// /api/users
router
  .route('/')
  .get(getUsers)
  .post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/login
router
  .route('/login')
  .post(loginUser);

// api/users/signup
router
  .route('/signup')
  .post(createUser);

// /api/users/logout
router
  .route('/logout')
  .post(logoutUser);

module.exports = router;
