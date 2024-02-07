// singleton => when objects are created by constructed
// Object.create

// object Literals : normal declaration

// Key vlaue pair


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

Object.freeze(user)
user.name = "sorham"
console.log(user);

// If i use the method to freeze the object then i will not
// be able to make a change.




