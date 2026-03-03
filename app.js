const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Cloud Deployment Successful 🚀");
});

server.listen(3000);