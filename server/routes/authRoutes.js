
// authRoutes.js

const express = require('express');
const router = express.Router();

// Login route
router.post('/login', (req, res) => {
    // Authenticate user (e.g., validate username/password)
    // If authentication is successful, set session data
    req.session.user = { id: 'user_id', username: 'username' };
    res.send('Logged in successfully');
});

// Logout route
router.post('/logout', (req, res) => {
    // Destroy session on logout
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error logging out');
        } else {
            res.send('Logged out successfully');
        }
    });
});

module.exports = router;
