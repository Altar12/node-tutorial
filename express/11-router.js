const express = require('express');
const people = require('./routes/people');
const app = express();

app.use('/api/people', people);

app.listen(5000, () => {
    console.log('Server started on port 5000...');
});