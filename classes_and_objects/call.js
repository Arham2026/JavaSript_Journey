function SetUsername(username){
    this.username = username

}

// function inside the function
function createUser(username,email,password){
    // still the function hasn't been called
    // SetUsername(username)
    // so we use the .call
// .call holds the reference after the execution context.
    SetUsername.call(this,username)
    this.email = email
    this.password = password

}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai);