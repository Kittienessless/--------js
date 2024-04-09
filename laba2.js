
let mas = [1,6,3,9,5,2];
let sum=0;
for(i=0;i<mas.length;i++){
let s = mas[i];
for(j=i+1;j<mas.length;j++){
if(sum<Math.abs(mas[i]-mas[j])){
sum=Math.abs(mas[i]-mas[j]);
}
}
}
console.log(sum);




// let mas = [1,5,1,6,6,3,9,5,2];
// for(i=0;i<mas.length;i++){
// for(j=i+1;j<mas.length;j++){
// if(mas[i]==mas[j]){
// mas.splice(j, 1);
// }
// }
// }
// console.table(mas);




// let mas =
// [
// {id: 1, idDone: true},
// {id: 2, idDone: false},
// {id: 3, idDone: true}
// ]

// for(i=0;i<mas.length;i++){
// if(mas[i].idDone==true){
// console.log(mas[i]);
// }
// }




// function search(n,k){
// let res = [];
// for(i=0;i<n.length;i++){
// if(n[i]>k){
// res.push(n[i]);
// }
// }
// return res;
// }
// let n =[1, 4, 6, 3, 2];
// k=2;
// console.log(search(n,k));// [4, 6, 3]






// function conv(n){
// let res=[];
// res = n.flat(15);
// return res;
// }

// let n = [1, 4, [34, 1, 20], [6, [6, 12, 8], 6]];
// console.log(conv(n));// [1, 4, 34, 1, 20, 6, 6, 12, 8, 6]











// function Summa(n){
// let count=0;
// for(i=0;i<n.length;i++){
// for(j=i+1;j<n.length;j++){
// if(Math.abs(n[i])-Math.abs(n[j])==0){
// count++;
// }
// }
// }
// return count;
// }

// let n = [-1, 2, 4, 7, -4, 1, -2];
// console.log(Summa(n));// 3







// function Summa(n){
// let count=0;
// for(i=0;i<n.length;i++){
// for(j=i+1;j<n.length;j++){
// for(k=j+1;k<n.length;k++){
// if(parseInt(n[i])+parseInt(n[j])+parseInt(n[k])==0){
// count++;
// }
// }
// }
// }
// return count;
// }

// let n = [-1,-5,3,-2,2];
// console.log(Summa(n));











// function getRandomNumber(min, max) {
// return Math.floor(Math.random() * (max - min) + min)
// }

// function* generateSequence(){
// while(true){
// yield(getRandomNumber(1,100));
// }
// }
// let generator = generateSequence();
// for(let value of generator) {
// console.log(value);
// }






// function* generatePadovan(num){
// let n1 = 1, n2 = 1, n3 = 1, pNext = 1;
// c=0;
// while(c!=num){
// pNext = n1 + n2;
// n1 = n2;
// n2 = n3;
// n3 = pNext;
// yield pNext;
// c++;
// }
// }

// let generator = generatePadovan(100);
// for(let value of generator) {
// console.log(value);
// }






// function* generatePrimeNumber(){
// let i=2;
// let flag = false;
// while(true){
// flag = false;
// for (let j = 2; j < i; j++) {
// if (i % j == 0){
// flag=true;
// }
// }
// if(!flag){
// yield i;
// }
// i++;
// }
// }

// let generator = generatePrimeNumber();
// for(let value of generator) {
// console.log(value);
// }












// let s = "Eсли повезёт, починка пройдёт успешно.";
// let str = s.split(' ').join('');
// str = str.split('.').join('');
// str = str.split(',').join('');
// str = str.toLowerCase();
// console.log(str);
// const map = new Map();
// let j =0;
// let count=0;
// for(i=0;i<s.length;i++){
// count=1;
// if(!map.has(s[i])){
// let d=s[i];
// for(j=i+1;j<s.length;j++){
// if(s[j]==d) count++;
// }
// map.set(s[i],count);
// }
// else continue;
// }
// for(let value of map.entries()) {
// console.log(value);
// }












// function getPrime(n){
// let flag;
// let count = n;
// let pr;
// for(i=0;i>=0;i++){
// if(count>=-1){
// flag = false;
// for (let j = 2; j < i; j++) {
// if (i % j == 0){
// flag=true;
// }
// }
// if(!flag){
// pr=i;
// count--;
// }
// }
// else{
// break;
// }
// }
// return pr;
// }

// console.log(getPrime(10));