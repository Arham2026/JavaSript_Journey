// execution context

// Global executionn Context.
// function Execution context.
// eval execution context.

// two phases

// ->  memory creation phase
//  -> execution phase

// call stack
// lifo Last in first out.


// for ex:

function one(){
    console.log("one");
    two()
    three()
}



function two(){
    console.log("two");
}
function three(){
    console.log("three");
}
one()

// The global scope will always be created whenever you create the code in the js whenn we call a function we create 
// a new environment then execute it then delete the environment.
// if we call the multiple function in one func then the call stack comes in

// (Lifo last in first out concept )