//wap  maximum of 5 numbers from using nested if else statement.

let a=10;
let b=20;
let c=200;
let d=60;
let e=160;

if (a>b){
    if (a>c){
        if (a>d){
            if (a>e){
                console.log("a is maximum");
            }
        }
    }
    else {
        console.log("e is maximum");
        
    }
}
else if (b>c){
    if(b>d){
        if (b>e){
            console.log("b is maximum");
            
        }
    }
    else{
        console.log("e is maximum");
        
    }
}

else if (c>d){
    if (c>e){
        console.log("c is maximum");
        
    }
    else {
        console.log("e is maximum");
        
    }
}

else if (d>e){
    console.log("d is maximum");
}

else {
    console.log("e is maximum");
    
   }
    
