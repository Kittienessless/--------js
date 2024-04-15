const os = require('os');
const cluster = require('cluster');

 // console.log(os.platform()); //возвращает операционную систему

// console.log(os.arch()); //x64/x32

// console.log(os.cpus().length); // список ядер. length - количество ядер

const cpus = os.cpus();
//возможно распределять по ядрам, кластаризация
console.log(process.pid);

if(cluster.isMaster){
  for( let i = 0; i<os.cpus().length - 2; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker) =>{
    console.log(`воркер с pid=${worker.process.pid} умер`)
    cluster.fork();
  })
}else {
console.log(`воркер с pid=${process.pid} запущен`);
  setInterval(()=>{
    console.log(`воркер с pid=${process.pid} все еще работает`)
  }, 5000)
}


