//wap a program of maximum of 4 numbers using nested if else statement.
let a = 10 ;
let b=20;
let c=30;
let d=40;

if(a>b){
    if(a>c){
        if(a>d){
            console.log("a is greatest");

        }
    
      else{
        console.log("d is greatest");
      }
    }

}
else if(b>c){
    if(b>d){
        console.log("b is greatest");

    }
    else{
        console.log("d is gretest");
    }

}


else if(c>d){
    console.log("c is gretest");
}
else{
    console.log("d is greatest");
}