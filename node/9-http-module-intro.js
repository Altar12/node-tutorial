const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the home page');
    } else if (req.url === '/about') {
        res.end('This is the information about our company');
    } else {
        res.end(`<h1>Oops!</h1>
                 <p>We can't find the page you are looking for</p>
                 <a href="/">Go back to home</a>`);
    }
})

server.listen(port);