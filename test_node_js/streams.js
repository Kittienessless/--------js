// читаем по кусочкам
//отправляем по кусочкам
//если файлы очень большие
//не обязательно файлы

const fs=require('fs');
const path=require('path')

/* //без стрима
fs.readFile(path.resolve(__dirname, 'text.txt'),(err,data)=>{
  if(err){
    throw err;
  }
  console.log(data);
})*/
//работают по принципу событий
const stream=fs.createReadStream(path.resolve(__dirname, 'text.txt'),{encoding:"utf-8"});
//один раз по дефолту 64кб
stream.on('data', (chunk)=>{
console.log(chunk)
})
stream.on('error',(e)=>console.log(e));
stream.on('open',()=>console.log('начали читать'));
stream.on('end',()=>console.log('закончили читать'));

//события
// open, close, error, end, data, pause, ready, resume




const writableStream=fs.createWriteStream(path.resolve(__dirname, 'text2.txt'))

for (let i=0;i<20;i++){
  writableStream.write(i+'\n');

}
writableStream.end();

