const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    const fileStream = fs.createReadStream('./contents/big.txt', 'utf8');
    fileStream.on('open', () => {
        // the data can be piped from read stream to write stream
        fileStream.pipe(res);
    });
    fileStream.on('error', (err) => {
        res.end(err);
    });
});

server.listen(5000, () => console.log('Server started on port 5000'));