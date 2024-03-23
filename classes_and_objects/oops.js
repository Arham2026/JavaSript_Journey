//  object literal

// this type of classes or the oop programming is done before introduction ecma6 
const users = {
    username : 'Arham',
    Grade : 'A+',
    Marks : 69,

    fetchDetails:function(){
        console.log(`${this.username}`);
    }
}
// (this) keyword gives us the context.
console.log(users.fetchDetails())

// If we have to create another person then we have to do it again so we have constructor function

//Constructor function.
function user(username,logincount,isLoggedIn){
    // the variable with the this is the variable
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;
    return this
    // if we use the new keyword the object returns it self to the call.
}

const userOne = new user('indresh',15,true)
const usertwo = new user('mahesh',70,false)
//new keyword helps us to create empty object(instances)
// constructor function called then arguments get packed in it.
// with the help of this keyword everything gets passed on to the object.


console.log(userOne);
console.log(usertwo);

// values are overwritten when don't use the new instance.

// constructor method in js (learn from chatgpt and mdn)

