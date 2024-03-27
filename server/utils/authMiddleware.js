
// authMiddleware.js
const session = require('express-session');

async function requireAuth(req, res, next) {
    try {
        const isAuthenticated = await checkUserAuthentication(req);
        
        if (isAuthenticated) {
            // User is authenticated, proceed to next middleware/route handler
            next();
        } else {
            res.status(401).send('Unauthorized');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};

async function checkUserAuthentication(req) {
    return req.session && req.session.user ? true : false;
}

module.exports = { requireAuth };


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