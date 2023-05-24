const express = require('express');
const app = express();

let posts=[];

//미들웨어 : 요청과 응답 사이 로직을 추가할 수 있는 함수 제공


//req.body를 사용하려면 json미들웨어를 사용해야 한다. -> 안쓰면undefined로 반환
app.use(express.json());

//post 요청 시 컨텐트 타입이 application/x-www-form-urlencoded인 경우 파싱
app.use(express.urlencoded({ extended: true })); 

// post요청의 대부분이 application/x-www-form-urlencoded 이라서 express.json()과 함께 사용 
// 위의 타입은 body에 키=값&키2=값2 같은 키=값 조합 형태의 데이터


app.get('/', (req, res) => {
  res.json(posts);
});

app.post('/posts', (req, res) => {
  const {title,name,text} = req.body;
  
  posts.push({id:posts.length+1, title,name,text, createdAt: Date()});
  res.json({title, name, text});
});

// urlencoded 미들웨어가 title=타이틀&name=이름&text=내용 형식의 데이터를 객체로 변경해서 res.body에 추가


app.delete('/posts/:id', (req, res) => {
  const id = req.params.id;
  const filteredPosts = posts.filter((post) => post.id !== +id);  //+id 는 문자열을 int형으로 변경한다는 뜻 (like parseInt)
  const isLengthChanged = posts.length !== filteredPosts.length;
  posts = filteredPosts;
  if(isLengthChanged) {
    res.json('OK');
    return;
  }
  res.json('Not Changed');
});

app.listen(3000, ()=> {
  console.log('Welcome posts START!');
});

//map, reduce, splice, filter 공부하기 