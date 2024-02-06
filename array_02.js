const  degree1 = ["Iot","Aiml","AIDS"]
const degree2 = ["cse","EEE","Ece"]

// const join = degree1.push(degree2)
// console.log(degree1);

// push() = Does the work in the Existing Array
// and the push includes it as an array in the array.


const join2 = degree1.concat(degree2)
// console.log(join2);
// concat() = It creates a new array after concading.
// proper merge Concading

// prefer using other method called Spread
// ...arrayname
const new_method = [...degree1, ...degree2]
// console.log(new_method);
// it is easy to concate more than two arrays

const another_array = [1,2,3,[5,8],90,[78,89,[69]]]

// flat => Converts complex arrays into a simple Array(multiple into one).

const new_another_array = another_array.flat(4)

// console.log(new_another_array);

// Array.isArray => Finds whether the Passd value is array or not

// console.log(Array.isArray("Arham"));

// Array.isArray(Array.prototype);
// Little known fact: Array.prototype itself is an array:
// The Array.prototype property allows you to add new properties and methods to arrays. 

// Array.from()

let name= "arham";

// console.log(Array.from(name));

// note : it is not able to convert the number.

// note 2 : it is a Shallow Copy this means the original array will be referernced to the new copy of an array, if we modify anything in the 
// new array then it would affect in the original array.

// console.log(name);

// Array.of()

// =>this creates the new Array which is a deep copy and it converts the parameters into array inspite of whatever type it is.

let num1= 1
let num2= 2
let num3= 3

console.log(Array.of(num1,num2,num3));







