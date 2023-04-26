const express = require('express');
const app = express();

// middleware to log which method called on which route
// all middlewares have req, res, next as params
const logger = (req, res, next) => {
    const { url, method } = req;
    console.log(`Called ${method} on ${url}`);
    next();
};

app.get('/', logger, (req, res) => {
    res.send('Home');
});

app.get('/about', logger, (req, res) => {
    res.send('About');
});

app.listen(5000, () => {
    console.log('Server started on port 5000...');
});