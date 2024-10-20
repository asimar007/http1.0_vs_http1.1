const express = require('express');

const appHttp11 = express();

// Simple route for HTTP/1.1 server
appHttp11.get('/', (req, res) => {
    // Set custom Keep-Alive headers
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Keep-Alive', 'timeout=10'); // Customize timeout to 10 seconds
    res.send('Hello from HTTP/1.1 server with custom Keep-Alive timeout');
});

// Listen on port 4000
appHttp11.listen(4000, () => {
    console.log('HTTP/1.1 server is running on http://localhost:4000 with Keep-Alive timeout of 60 seconds');
});