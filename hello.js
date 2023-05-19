const http = require("http");  // require(): http모듈 읽어오는 함수
let count = 0;
const server = http.createServer((req, res) => { //서버 만드는 함수(cb)
  log(count);  //전역변수 count 사용해서 요청에 대한 로그 남김
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain"); //4.
  res.write("hello\n");  //응답
  setTimeout(() => {
    res.end("setTimeout end");
  }, 2000);
});

function log(count) {
  console.log((count += 1));
}

server.listen(8000);


/**
 * createServer function은 서버 인스턴스 만드는 함수 
 * cb를 인수로 받아 http서버로 요청이 들어오면 해당 요청을 처리하는 함수
 * cb는 요청(req), 응답(res)객체를 인수로 받음
 * 
 * 200은 OK 상태코드  -> 필요시 상태코드 확인!!
 * 
 * 4. http 요청에 대한 부가정보 설정 -> 헤더에!
 * text/plain === 텍스트를 평문으로 해석하겠다.
 * if) text/html === 텍스트를 html로 해석한다.
 * "http 프로토콜의 헤더 필드 정의" 로 찾아볼것
 * 
 * 타이머는 libuv에서제공하는 기능을 사용하며 이벤트 루프에서 콜스택을 모니터링하면서 실행할 시점을 정한다.
 */