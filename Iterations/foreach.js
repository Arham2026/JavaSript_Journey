const college = ["saveetha","Baveetha","kaveetha","Panimalar"]


// for using the foreach loop we need to write the function in it with out the name
college.forEach( function (Item) {
    // the work
    // console.log(Item);
})

// arrow function without the name
college.forEach(  (Item) => {
    // console.log(Item);
})

// Interesting stuffs

// it also has the property to contain the whole array and the Index of it.
college.forEach(  (Item,Index,college) => {
    // console.log(Item);
})


const MyCoding = [
    {
        language : 'Javascript',
        languageFile : 'Js'
    },
    {
        language : 'python',
        languageFile : 'py'
    },
    {
        language : 'c',
        languageFile : '.c'
    },
   
]

// this is very commonn operation

MyCoding.forEach((Item) => {
    // console.log(Item.language);
})

// Using the Dot function in the arrays.

// filter returns the value but for each loop doesn't return the values
const mynums = [1,2,3,4,5,6]

let ans = mynums.filter( (num) => num>3  )
// note : If you write the paranthesis in the filter loop then you need to write the return keyword.

// console.log(ans);

let ans1 = mynums.filter( (num) =>{
    return num>3
}   )

// console.log(ans1);




