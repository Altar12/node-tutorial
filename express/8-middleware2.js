// this code provides same functionality as 7-middleware-intro.js

const express = require('express');
const app = express();

// middleware to log which method called on which route
const logger = (req, res, next) => {
    const { url, method } = req;
    console.log(`Called ${method} on ${url}`);
    next();
};

app.use(logger);

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.listen(5000, () => {
    console.log('Server started on port 5000...');
});