
// authMiddleware.js

function requireAuth(req, res, next) {
    if (req.session && req.session.user) {
        // User is authenticated, proceed to next middleware/route handler
        next();
    } else {
        // User is not authenticated, redirect to login page or send unauthorized response
        res.status(401).send('Unauthorized');
    }
}

module.exports = requireAuth;


// **************************************
// *************NOTE: this code should be put in routes to protect them ****************
// **************************************

// // Protected route
// const requireAuth = require('./authMiddleware');

// app.get('/protected', requireAuth, (req, res) => {
//     res.send('This is a protected route');
// });

// **************************************
// **************************************
// **************************************