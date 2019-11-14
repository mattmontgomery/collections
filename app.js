const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
        test: true
    }))
});

server.listen(port, () => {
    console.log(`listening on ${port}`);
});