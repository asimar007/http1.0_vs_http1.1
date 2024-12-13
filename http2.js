const http2 = require('http2');
const fs = require('fs');

// Load SSL certificate and key
const serverOptions = {
    key: fs.readFileSync('./private.key'),
    cert: fs.readFileSync('./certificate.crt'),
    allowHTTP1: true, // Allow fallback to HTTP/1.1 if the client doesn't support HTTP/2
    secureProtocol: 'TLS_method',
};

const server = http2.createServer(serverOptions, (req, res) => {
    // Set response headers
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Send response
    res.end('<h1>Hello from HTTP/2 server</h1>');
});

// Start the server on port 5000
server.listen(5000, () => {
    console.log('HTTP/2 server is running on https://localhost:5000');
});
