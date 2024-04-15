const fs=require('fs');
const path=require('path')
const express= require('express')
const lodash= require('lodash');
const { loadEnvFile } = require('process');

require('dotenv').config();
const app = express();


app.get('/', function (req, res) {
  
  let text = fs.readFileSync('text.txt', 'utf8');
  res.send('<h1>'+text+'</h1>')
  

})
app.listen(process.env.PORT,()=>{
  console.log('express web app on http://localhost:5000')
})






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
const writeFileAsync=async(path,data)=>{
  return new Promise((resolve,reject)=>fs.writeFile(path,data, (err)=>{
    if(err){
      return reject(err.message);
    }
    resolve();

  }))

}
const data="123 "

writeFileAsync(path.resolve(__dirname, 'text.txt'),data)
.then(()=>appendFileAsync(path.resolve(__dirname, 'text.txt'),data.split("").reverse().join("")))
.then(()=> readFileAsync(path.resolve(__dirname, 'text.txt')))
.catch(err=>console.log(err))



let users=[
  {name: "john", age:32},
  {name: "mike", age:18},
  {name: "anna", age:52},
];
const test = lodash.sortBy(users, [(o)=>o.name]);
console.log(test)

