const userEmail = "arham@gmail.com"

if(userEmail){
    console.log("got the UserEmail");
}
else{
    console.log("didn't get the userEmail");
}

// falsy value 
// false , 0 ,-0 ,BigInit on , "",'','',null,undefined, NaN

// truthy value
// " " , true , ' ',[],{},function()

// How to check the array

let array = []

if(array.length==0){
    console.log("array is empty");
}

let emptyobj={}

if(Object.keys(emptyobj).length==0){
    console.log("obj is empty");
}

// interview question false == "" output will be true.

// nullish coalecing Operator(??)


