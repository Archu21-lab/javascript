function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    //function ko technically call krne k liye dusre function mein iske liye ye 
    //call method use hota hain  aur this means jo vo function mein exact method hai vhi 
    //this print hota || uska reference leta hain
    
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);