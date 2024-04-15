/*
const path = require('path');
console.log(path.join(__dirname, 'first', 'second'));

console.log('абсолютный путь', path.resolve('first', 'second'));

//--------------------------

const siteURL= 'http://localhost:8080/users?id=5123'
const url=new URL(siteURL);
console.log(url);

//-------------------- file system


const fs=require('fs');
//fs.mkdirSync(path.resolve(__dirname, 'dir')); //потом будет ошибка что папка уже существует
//рекурсивно создавать папки не может по умолчанию
//fs.mkdirSync(path.resolve(__dirname, 'dir1', 'dir2'), {recursive: true}); //не асинхронный
console.log('start')
/* fs.mkdir(path.resolve(__dirname, 'new_dir1'), (err)=>{
  if(err) {
    console.log(err)
    return;
  }
  console.log('dir created')

}) 
console.log('end')

//записывает данные в файл, асинхронно, создает его. если что-то было записано, перезапишет
fs.writeFile(path.resolve(__dirname, 'test.txt'), 'dgsdfg fgsdfg df gdf df gr test test test', (err)=>{
  if(err) {
    throw err;
  }
  console.log('file was written')
})
//дозаписать - appendfile
// ад колбеков - функции вложены друг в друга. не читабельно и плохо поддерживается

//для подобных задач используются промисы

const fsPromise=require('fs/promises');
//const { rejects } = require('assert');
// fsPromise.mkdir('path').then().catch()
//fsPromise.readFile('path').then().catch()
//fsPromise.writeFile('path').then().catch()
//fsPromise.appendFile('path').then().catch()
//fsPromise.rm('path').then().catch()
//fsPromise.rmdir('path').then().catch()

//другой способ преобразования к промисам
const writeFileAsync=async(path,data)=>{
  return new Promise((resolve,reject)=>fs.writeFile(path,data, (err)=>{
    if(err){
      return reject(err.message);
    }
    resolve();

  }))

}
const appendFileAsync=async(path,data)=>{
  return new Promise((resolve,reject)=>fs.appendFile(path,data, (err)=>{
    if(err){
      return reject(err.message);
    }
    resolve();

  }))

}



const readFileAsync = async (path) =>{
  return new Promise((resolve, reject)=>fs.readFile( path, {encoding:'utf-8'}, (err, data)=>{
    if(err){
      return reject(err.message);
    }
    resolve(data);
  
  }))

}


const removeFileAsync = async (path) =>{
  return new Promise((resolve, reject)=>fs.rm( path, {encoding:'utf-8'}, (err)=>{
    if(err){
      return reject(err.message);
    }
    resolve();
  
  }))

}

writeFileAsync(path.resolve(__dirname, 'test1.txt'),'data')
.then(()=>appendFileAsync(path.resolve(__dirname, 'test1.txt'),'3423 l l  k kl k 4'))
.then(()=>appendFileAsync(path.resolve(__dirname, 'test1.txt'),'eretr j j jk j kj j kjee '))
.then(()=>appendFileAsync(path.resolve(__dirname, 'test1.txt'),'srwr we wkkkker '))
.then(()=> readFileAsync(path.resolve(__dirname, 'test1.txt')))
.then(data=>console.log(data))
.catch(err=>console.log(err))


/*
removeFileAsync(path.resolve(__dirname, 'test1.txt'))
  .then(()=> console.log('file was removed'))

  


// получить данные из окружения
//записать в файл
//посчитать количество слов в файле
//прочитать файл
//записать данные в новый файл с количеством слов
//удалить файл
  const text = process.env.TEXT || '';

  writeFileAsync(path.resolve(__dirname, 'test2.txt'),text)
    .then(()=>readFileAsync(path.resolve(__dirname, 'test2.txt')))
    .then(data=>data.split(' ').length)
    .then(count=> writeFileAsync(path.resolve(__dirname, 'count.txt'), `количество слов: ${count}`))
  //  .then(()=>removeFileAsync(path.resolve(__dirname, 'test2.txt')))


*/


  //------------------------
  //modules

  const lib=require('./module_test.js');
  console.log(lib.func1(5,10));
  console.log(lib.func2(15,10));

  const func = require('./printArr.js')
  let arr2=[1,22323,3,323, 4,'444']
  func(arr2);







  //------------------------------------------
  //средства асинхронного программирования

  //обратные вызовы callback

  // функция обратного вызова в программировании передача исполняемого кода в качестве одного из параметров другого кода 
  // обратный вызов позволяет в функции исполнять код, который задается в аргументах при ее вызове
  // одноразовый??




//событийно ориентированная модель

//событие - объект описывающий изменение состояния источника, с которым оно связано
//нажатие кнопки, ввод символов с клавиатуры
//слушатель события listener - уведомляемый о некотором событии объект. чтобы слушатель смог среагировать на определенное событие источника 
//он должен быть им зарегистрирован, т.е. подключен к источнику
//listener находится в постоянном ожидании, пока в источнике, в котором он зарегистрирован, не наступит соответствующее событие, при возникновении которого
// слушатель получает управление. так же слушателю передается объект события (источник), чтобы он смог правильно на него отреагировать
//после обработки события слушатель возвращает управление. таким образом, для обработки события вызываются только те слушатели, которые на него подписались



