let admin=''; 
let name='john';
admin=name;
alert(admin);





let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(parseInt(a) + parseInt (b)); // 3




for(let i=1;i<=10;i++){
  if(i%2==0){
    console.log(i)
  }

}



let u=0;
while (u<3){
  alert( `number ${u}!` );
u++;
}



let x=true;

while (x){
let  num= prompt("число");
if(num>100){
    x=false;
    break;
  }
  else {
  continue;
  }
}

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  console.log( i ); 
}









function reverseNumber(number) {
 
    let result = 0;
    while (number) {
      result = result * 10 + number % 10;
      number = Math.floor(number / 10);
    }
  
    return result;
  
}
let number=123;
let rev=reverseNumber(number);
console.log(rev)





/* function povt(num){
  let arr=[];
  for(let i=0;i<num.count();i++){
    
    arr[i]=num.split();
    if(a[i]==a[i+1]){
      continue  
    }

  }
return arr;
}
let nnn=111333456 ;
let aaa=[];
aaa=povt(nnn);
console.log(aaa); */

let count=0;
function countDigit(n, k) {
    if (n < 10) {
    if (n === k) {
      return 1;
    } 
    else {
    return 0;
    }
  }



  let lastDigit = n % 10;
  let count = countDigit(Math.floor(n / 10), k);
  if (lastDigit ===k) {
  count++;
  }
  return count;

}
let rr=1355567;
let kaa=5;
let ress = countDigit(rr,kaa);
console.log(ress);



