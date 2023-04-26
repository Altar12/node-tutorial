// attaching middleware to paths that include a base path
const express = require('express');
const app = express();

// middleware to log which method called on which route
const logger = (req, res, next) => {
    const { url, method } = req;
    // url will be the part remaining after the base path
    console.log(`Called ${method} on ${url}`);
    next();
};

// attach middleware to all paths that have base path '/api'
app.use('/api', logger);

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/api/items', (req, res) => {
    res.send('Items');
});

app.get('/api/products', (req, res) => {
    res.send('Products');
});

app.listen(5000, () => {
    console.log('Server started on port 5000...');
});