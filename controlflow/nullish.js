// nullish coalishing operator(??):null undefined


let one;

// one = 5 ?? 10
// console.log(one);

// one = null ?? 200
// console.log(one);

one = undefined ?? 200
console.log(one);



// the (??) checks that whether the declared variable has null or undefined . if it has the null or undefined
//  then it assigns the first value

// ternary operator

// condition ? true : false it is alrernative to if else in a single line

const prize = 100

prize >100 ?console.log("more than 100") : console.log("less than or equal to 100");

