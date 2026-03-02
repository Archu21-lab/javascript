//wap to  print numbers 1 to N using loop,do...while loop,for loop.

//let n=30;
//let i=1;
//while(n>=i){
  //  console.log(n);
    //i++;
  //}


  //do while loop
//let n=25;
// let i =1;
//do{
//console.log(i);
//i++;
//} while (n>=i);





//for loop
 //for (i=1; n>=i; i++){
// console.log(i)}

//wap to print nto1 using while loop,do while loop, for loop.

//let  n=25;
//let i=1;
// while(n>=i){
  //console.log(n);
  //i--;
 //}


 //do while loop 

 //do{
 //console.log (i);
//i--;
// }

//for loop

//for (let i=1; n>=1 ;i--){
  //console.log(n)

//}

//wap to print only even numbers from 1to n using while loop, do while ,for loop.

//let m=23;
//let i=1;

//while(m>=1){
  //if(m%2==0){
    //console.log(i);
  //} i++;
//}

//do{
//if (n%2==0){
//console.log(i);
//}i++
//}while(n>=1);

//for loop 

//for (let i=1,n>=1, i++){
//if(n%2==0){
//console.log(i)}
//}


//wap to print only odd numbers from n to1 using  while loop for loop do while loop.

//let n=30;
//let i=1;
//while(n>=i){
  //if (n % 2 !==0){
    //console.log(n);
  //} n--;
//}

//do{
  //if(n%2 !==0){

    //console.log(n);

 // } n--;

//}while (n>=i);

//for(let i=1; n>=i; n--){
  //if(n%2 !==0){
    //console.log(n);
  //}
//}

//wap to print all leap years between a start and end year using while loop do while loop for loop.

let year=2000;
let end= 2025;

while(end>=year){
  if(year%4==0){
    console.log(year);
  } year++;
}


do{
  if(year%4==0){
    console.log(year);
  } year++;
}while(end>=year);


for(end=2025; end>=year; year++){
  if(year%4==0){
    console.log(year)
  }
}

//wap to print the sum of number from 1 to n using while loop ,do while loop ,for loop.


let a=20;
let j=1;
let sum=0;

while(j<=a){
  sum+=j;
  j++;
}
console.log("sum using while loop:", sum);


do{
  sum+=j;
  j++;
}while(j<=a)

console.log("sum using do while:", sum);

//for(j<=a; j++;){
  //sum+=j;

//console.log("sum using for while:", sum);
//}

//wap to print multiplication table of any number using while loop ,do while , for  loop.


//let num= 7;
//let k=1;

//while(k<=10){
  //console.log(num*k);
  //k++;
//}

//do while

//do{
  //console.log(num*k);
  //k++;
//}while(10>=k);

//for(k=1; 10>=k; k++){
    //console.log(num*k);
//}

//wap to print logical sequence 1,3,5,7,9 using while loop do while for loop.

//let h=9;
//let c=1;

//while(c<=h){
  //if(h%2!==0){
   // console.log(c)
  //}c++;
//}

//let c=1;
 //while(i<=9){
  //console.log(i);
  //i+=2;
 //}

 //wap to print sequence : 1,11,111,1111....using while loop do while for loop.

 //let n=5;
 //let i=1;
 //let num=0;

 while(i<=n){
  num=num*10+1;
  console.log(num);
  i++;
 }

 do{
  num=num*10+1;
  console.log(num);
  i++
 }while(i<=n);

 for(let i=1; i<=n; i++){
  num=num*10+1;
  console.log(num);
  i++;
}

//wap to print fibonacci sequence using while loop ,do while, for loop.

let k=10;
let b=0, c=1;
let i=1;

while(k>=i){
  console.log(b);

  let next= b+c;
  b=c;
  c=next;
  i++;

}

//wap to count digits of using while loop,do while loop for loop.

let num=12345;
let temp=num;
let count =0;

while(temp>0){
  temp=Math.floor(temp/10);
  console.log("counts digits of");
  count++;
}
