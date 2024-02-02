/* eslint-disable */
const http = require('http');
const fs = require('fs').promises;

const app = http.createServer(async (req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        try {
            const data = await fs.readFile('3-read_file_async.js', 'utf8');
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`This is the list of our students\n${data}`);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error reading file');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

app.listen(1245);

module.exports = app;
