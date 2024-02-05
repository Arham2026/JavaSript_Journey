// array
const arr = [0,2,4,5]
// array == object
// array is with in the brackets
// it can have the mixed data type
// access only by indexing

// Interview : shallow Copy => Same reference Point

// Deep Copy : Don't share the Ref point.

// methods 

// 1. push
arr.push(8)
// push method introduces a New element into the array
// console.log(arr)

arr.pop()
// Removes the Last element of the array.
// console.log(arr)

arr.unshift(78)
// Adds the new Element in the beginning of the Array.
// console.log(arr)

arr.shift()
// removes the First element of the Array.
// console.log(arr)

// Questionary methods to Check whether the paticular element is 
// present or not

// console.log(arr.includes(99));
// it gives out the Answer in the Boolean type

// console.log(arr.indexOf(8));

const newarr = arr.join()
// here the array is converted into the string and seperated by ,

// slice , Splice

// real Difference between Slice and the splice!!
console.log("A ", arr);
const na1 = arr.slice(1,3)
console.log("B ",na1);

const na2 = arr.splice(1,3)
console.log("C ",na2);


console.log("D ", arr);

// In short The Slice just Gives a Part of the array to us as a Copy
// It doesn't affect the Original Array

// Splice : 1. Gives the Part of array to us by Cutting Out that specific part from the Array.
            // 2. The range.


