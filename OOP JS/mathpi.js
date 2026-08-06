const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
 
//getOwnPropertyDescriptor ye ek property hai jo hume allow krti hain k us code jo humnw khud ne create 
//kiya hai vo usko true false kr sko edit kr sako aur usme hum edit kr k alloq ke akte hain 



Object.defineProperty(chai, 'name', { // define property ko hum iske liye use 
    //krte hain kyuki usko hum edit krne ka hume permission de usko add krne ka usme 
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) { //ye jo object.entries likhi hain usko  hume access milta hain ki hum 
    //ki hum jitni chahe utni entries likj k usko hum entries kar skate hain 
    
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}