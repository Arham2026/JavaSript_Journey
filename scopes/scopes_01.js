// the diff between the let and the var and the const

// the scope {}

if (true){
let a = 10;
var b = 20
// var doesn't follow the scope so we don't use it.
const c = 30;

}

// only be will be available out but it causes the programmers the problem
// console.log(b);

// Block level scope 

// global scope are the ones which gets declared outside of the block

// functions inside the function

// closure

// A closure is a function that has access to the variables in its scope chain, even after the outer function has closed.

function outer(){

    const a = 2

    function inner(){
        const b = a + 1
        console.log(b)

    }
}
// the above written CCode is the best example of the closure.



// declaring the functions in the variable

firstone(10)
function firstone(num){
    return num - 1;
}

// if the function is declared with the normal syntax then
// It could be accessible every where even above that particular Function

const secondone = function(num){
    return num - 1;

}

// the difference is that in the function which is declared using the variable will be accessed only after the declaration.


// Hoisting


