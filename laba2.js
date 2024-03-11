

let arr=[1, 50, 622, 17, 999, 8, 77];
let array=[
  {id: 1, idDone: true}, 
  {id: 2, idDone: false},
  {id: 3, idDone: true}
];

let min=0;
function f(){
  
  for (let i=0;i<arr.length;i++){
      arr.sort(function(a, b){
        return a - b;
      });
      if (arr[i+1]-arr[i]<=min){
        min=arr[i+1]-arr[i];
      }
      else {
      continue;
      }
  }
  return min;
}

let r=f();
console.log(arr);
console.log(r);

let arrray=[1, 2, 4, 6, 1, 1,444, 44];
let nnn=[];
for (let i=0;i<arrray.length;i++){
  if(arrray[i]===arrray[i+1])

}

