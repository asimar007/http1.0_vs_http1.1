const express = require('express');
const http = require('http');

const appHttp10 = express();

// Simple route for HTTP/1.0 server
appHttp10.get('/', (req, res) => {
    res.setHeader('Connection', 'close'); // Force HTTP/1.0 connection close behavior
    res.send('Hello from HTTP/1.0 server');
});

// Listen on port 3000
appHttp10.listen(3000, () => {
    console.log('HTTP/1.0 server is running on http://localhost:3000');
});
