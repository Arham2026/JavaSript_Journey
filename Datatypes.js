//two Catagorise of the data type 
//    1.Primitive
//    2.non-primitive.

//  Is Js Dynamic or static ?
//  static means you should declare the variable which type before initialising it.
//  Dynamic is opposite of that

// Primitive = 7 types => call by value
const score = 6
const value = 6.4
// no difference in the decimal or round value it all comes in the same data type number

// String, number ,Boolean ,null(empty), Undefined ,Symbol, BIg Int.
const temp = null 
let userEmail = undefined

// example for the symbol : which adds unique property to the element.
const id = Symbol('123')
const anotherId = Symbol('123')

// NOTE : Even though the number that we included there is same it doesn't mean
// the value of the id is same.

const bigNumber = 7423034704n;

// it saves the big number like the above.

// Reference Type (non-primitive)

// array, Objects, FUnctions

// why it is ref
// Arrays

const heros = ["shakthiman", "jackichan","chinchan"]

// objects(which is in the curly brackets)

let obj = {
    name : "Arham",
    age : 22,

}

// in JavaScript functions can also be treated as variables

const myFunction = function(){
    console.log("helloworld");
}

// To know the Data type of the Variable

// Object Function
console.log( typeof myFunction );
// SYmbol
console.log( typeof anotherId  );
console.log( typeof heros  );


// All non-primitive is the data type of the object and the function is the object-function dt.

// --------------------------------------------
// -----------Memory----------

// two types

// stack (primitive), Heap(Heap)
// oh boy COmmon let's get into this thing the memory wuhoooo!!

//  <---- Stack---->
let YT = "Arham Shajahan"
let newYT = YT

console.log(YT)
console.log(newYT)

YT = "nothing"

console.log(YT)
console.log(newYT)

// from the above code we will be able say that the stack copies the data type we are assigning to.


// Now let's discover what do the referencing is a heap memory.

let userone ={
    name :"arham",
    grade : "12th",
}

let usertwo = userone

console.log(userone.name);
console.log(usertwo.name);

// the above printing gives the same result.

// now I would like to change the Usertwo object which we refernced to the userone

usertwo.name = "mufa"
// now printing it again
console.log(userone.name);
console.log(usertwo.name);

// one thing I found here by experimenting id if you start assigning the usertwo again it gives what you assign 
// I mean Look below.

usertwo = {
    name : "keerthivasan",
    grade : 6,

}

console.log(userone.name);
console.log(usertwo.name);


// now we can see the change happens so the referecing is when you try to assign the particular thing in an
// object then it will change in Every thing.

// ------------------------ that's it for today(30/01/2024)---------------------------------------



