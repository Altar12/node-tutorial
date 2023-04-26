const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'john') {
        req.user = { name: 'John', id: 3 }; // attaching info to req object
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};

module.exports = authorize;