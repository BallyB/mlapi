const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (token) {
            next();

        } else {
            throw 'Invalid request';
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};