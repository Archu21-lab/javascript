const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

    //isme agar this keyword use nhi krenge aur console.log(`Username: ${username}`) ye print krenge to
    //to browser ko yeh samajh hi nahi aayega k vo konsi value mang rha hai print krne k liye 
    // agar uspe hum username k aage this keyword lagaye to vo samajh jata hai ki hum yhi username ki baat kr rhe hai aur vo print bhi kr dega

    //aur agar console mein sirf this hi type kr k print kiya to pura ka pura object hi print hoga




}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);




//ye construct function hai jo har bar naya instastant deta hai means ye function 
//code ek bar likho aur usko print karao alag alag jagaho pr use milta hain ex:userOne,UserTwo
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
//ye new keyword hume ye function ko multiple time right value print krvata hain means ye sab users
//ki value isme mismatch nhi honi chahiye
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);