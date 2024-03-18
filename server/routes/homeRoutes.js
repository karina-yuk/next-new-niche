const router = require('express').Router();

const {
  getHomepage,
  getAboutUsPage,
  getEventsPage,
  getNewsletterPage,
} = require('../controllers/homeController');

// /
router.route('/').get(getHomepage);

// /aboutus
router.route('/aboutus').get(getAboutUsPage);

// /events
router.route('/events').get(getEventsPage);

// /newsletter
router.route('/newsletter').get(getNewsletterPage);

module.exports = router;