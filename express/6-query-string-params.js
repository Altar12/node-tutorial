const express = require('express');
const { products } = require('./data');
const app = express();

app.get('/api/products', (req, res) => {
    const { search, limit } = req.query;
    let result = [...products];
    if (search)
        result = result.filter(product => product.name.startsWith(search));
    if (limit)
        result = result.slice(0, Number(limit));
    res.status(200).json(result);
});

app.listen(5000, () => {
    console.log('Server started on port 5000...');
});