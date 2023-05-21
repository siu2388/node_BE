const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('OK'); // OK를 응답하고 종료
});

server.listen('3000',() => console.log('OK서버 시작!')); //접속대기
