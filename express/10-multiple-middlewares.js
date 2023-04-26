const express = require('express');
const logger = require('./middlewares/logger');
const authorize = require('./middlewares/authorize');
const app = express();

app.use([authorize, logger]);

// can attach multiple middlewares to single path as well
// app.get('/', [authorize, logger], (req, res) => { /*LOGIC*/ });
app.get('/', (req, res) => {
    res.status(200).send('Home');
    console.log(req.user);
});

app.listen(5000, () => {
    console.log('Server started on port 5000...');
});