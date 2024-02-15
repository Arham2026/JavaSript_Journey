// IIFE(Immdietly Invoking functions Expressions)

function hi(){
    console.log('hi');
}

// hi()

// why we use it ? => To remove pollution of the global scope
// How to write the IIfe ()()

// ex: 

(function nothing(){
    console.log('I have written this code in IIfe');
})();

// how to write the multiple IIFe in the same page.
// semi colun is must in the end of the program of the IIFe functions

// unnamed iffi
( (name) => {
    console.log(`my name is ${name}`);
})('kunji');


