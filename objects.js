// constructors 
// Object.create()
// using new
// multiple instance


// object Literals : 
// An object created by the object literals is a singleton
// single instance
// Key vlaue pair

// constructor functions can be used to create objects 
// that inherit from other objects, while object literals cannot.

// declaring the Symbol 

const mysym = Symbol("string")

const user = {
    name : "arham",
    age : 19,
    "full_name" : "arhamshajahan",
    [mysym] : "key1"

    // using the brackets
}

// How to access the values
// two ways 1.dot 2.bracket string
// console.log(user.age);

// console.log(user["age"]);
// why we should know both the ways?

// Investigative Study

console.log(user["full_name"]);
// console.log(user[mysym]);

// It is crucially used when the keys are declared in the string format

// how to declare a symbol data type

// by wrapping up with the bracket

// Declare it first with the Symbol()

// [xxxx] : "something" 
// console.log(typeof mysym )

// Changing the values by 

// Object.freeze(user)
user.name = "sorham"
// console.log(user);

// note :
// If i use the method to freeze the object then i will not
// be able to make a change.


// now playing with the function

user.aim = function(){
    // user.name = "ohhh"
    console.log(`my name is ${this.name}, I know that is Wierd`);
}

console.log(user.aim());
