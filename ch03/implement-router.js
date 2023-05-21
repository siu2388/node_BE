const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const path = url.parse(req.url).pathname
})