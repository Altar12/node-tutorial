const express = require('express');
const app = express();

app.use(express.static('./public'));

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>');
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});