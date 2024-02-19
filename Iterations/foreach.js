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
    console.log(Item.language);
})

// Using the Dot function in the arrays.
