
// syntax
function example(){
    // console.log("a");
    // console.log("b");
    // console.log("c");
    // console.log("d");
}

// nomenclatures
example()
// reference and Execution
// the name of the function is the reference

// parameters and arguments

// parameters are the one which you mention in the funxtion
// arguments are the ones which we pass while calling the Function

// using string interpolation
// Understanding the Return methodology
// saving the functions output in a variable.


function add(a,b){
    let ans = a + b
    return ans;
}

// const addition = console.log("The Result of the function would be ",`${add(10,15)}`);

// note for the Interview : if you don't pass an argument then 
        // it is said to be undefined.

function website(username){
    if(!username){
    //    console.log('Pass the argument buddy!');
        return
    }
    // !username means if username is undefined.('!' not)
    // console.log(`${username} is logged out of Website`);
}


// const name1 = console.log(website())
// it would come as undefined


// To avoid it

function website(username = "sam"){
    if(!username){
    //    console.log('Pass the argument buddy!');
        return
    }
    // !username means if username is undefined.('!' not)
    // console.log(`${username} is logged out of Website`);
}

website()

// you could pass the argument near the parameters.




// rest operator ...
function calculateCartprize(...number){
    return number;
}

console.log(calculateCartprize(56,78,89,900));
// It gets Converted in to an array.

// Interview : what if ?

function calculateCartprize(num1,num2,...number){
    return number;
}

console.log(calculateCartprize(56,78,89,900));
// the first two argument goes to the first two parameters 
// the others are passed to the rest Operator.


// passing the object in the Object.

function user(anyobject){
    console.log(anyobject.name)
    console.log(typeof anyObject);
    // Undefined bruh!!
}

console.log(user(
    {
        name : "arham",
        degree : "Iot",
    }
));





// we can pass the object without making it through the arg 
 

// PASSIing the array















