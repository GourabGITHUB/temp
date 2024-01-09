const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'temp.html');
    const stream = fs.createReadStream(filePath);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    stream.pipe(res);
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
