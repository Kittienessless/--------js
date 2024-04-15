const http=require('http');
const dotenv=require('dotenv');
dotenv.config();

const PORT=process.env.PORT ||5000;
const server=http.createServer((req, res)=>{
  res.writeHead(200,{
      'Content-type':'application/json'
    })

    //используются фреймворки, это просто для примера
if(req.url==='/users'){
    return res.end(JSON.stringify([
      {id:1, name:'users name'} 
    ]))
  }
  if(req.url==='/posts'){
    return res.end('POSTS')
  }
  res.end(req.url)
})
server.listen(PORT,()=>console.log(`server has started on port ${PORT}`));