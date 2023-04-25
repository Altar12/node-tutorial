const express = require('express');
const { products } = require('./data');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to HomePage</h1><a href="/api/products">Products</a>');
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.status(200).json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params;
    const singleProduct = products.find(product => product.id === Number(productID));
    console.log(singleProduct)
    if (!singleProduct) 
        res.status(404).send('Product not found');
    res.status(200).json(singleProduct);
});

app.all('*', (req, res) => {
    res.status(404).send('Resouce not found');
});

app.listen(5000, () => {
    console.log('Server started on port 5000...');
});
