const Emitter = require('events');
const dotenv=require('dotenv');
dotenv.config()

const emitter=new Emitter();
//пользовательсвкое событие
emitter.on('message', (data, second, third)=>{
  console.log('вы прислали сообщение' + data);
  console.log('второй аргумент' + second);
})
const MESSAGE  = process.env.mess ||'';

if(MESSAGE){
  emitter.emit('message', 123)
}else {
  emitter.emit('message',  'вы не указали сообщение')
}