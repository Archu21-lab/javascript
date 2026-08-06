// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
} //agar hum object ka access ley prototype ko to value hume sab mein ye access ho skta hain
//means array string function sab  mein 

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
} //yha pe hum sirf array ko access kr skte hain agar usko hum ye heropower mein access console mein print 
//kiya to vo error ayega array sirf array mein access hoga object mein sab access hoga bcz javascript mein sabhi 
//array function sab object hi hain


// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User //ye proto property k ssath hum teacher mein jo value likhi hain vo to access kr hi skte hain uske alawa 
// jo abhi user variable k bhi access kr hi sakte hain


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()