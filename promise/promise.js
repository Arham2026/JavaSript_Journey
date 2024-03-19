// How to form the promises

const promise1 = new Promise(function(resolve, reject){

    //Do an Async Task 
    // DB calls, Crytography ,network call.

    setTimeout(function(){
        console.log('Async Task is completed')
        resolve();
        // the above method connects the resolve and then
    }, 1000)
})

//Consuming the promise. .then() is connected with the resolve
promise1.then(function(){
    console.log('promise consumed');
})

//mow there is an optimised way to do this task

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Asynchronous task 2 is completed');
        resolve()
    },1000)
    
    
}).then(function(){
    console.log('Async 2 is resolved');
})


// the resolve sends the data to then.
const promiseThree = new Promise(function(resolve,reject){

    setTimeout(function(){

        resolve({username : 'arham', email:'arhamshajahan@gmail.com'})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})


const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:'keerthi', password:'1234'})
        }
        else{
            reject('File Not Found : Something went Wrong')
        }
    },1000)
})
//for error .catch()

// when you need the particular data from the promise process 

// .the chain to get a particular data from the synchronous process
promisefour
.then((user)=> {
    //call back
    console.log(user);
    return user.username    
    
})
// the below then has the access of the values in there 
.then((username) => {
    console.log(username);
})
.catch((err) => {
    console.log(err);
})
.finally(()=> console.log('The promise is Either resolved or rejected'))


const promisefive = new Promise( (resolve,reject) => {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'mahesh', password:'1234'})
        }
        else{
            reject('File Not Found : Js Something went Wrong')
        }
    },1000)
})

// you can use other methods like asyncawait

async function consumefunction(){
    // the async doesn't handle the errors seperrately 
    // so we need to use a try catch syntax to do it.
  
 try{
  const response =  await promisefive
  console.log(response);

 } 
 catch{
    console.log('Error: Something is Wrong');
 }
}

consumefunction()

//to get the values.
// async function getAllUsers(){
//     try{
//   const response =  await fetch('https://api.github.com/users/Arham2026')
//   const data =  await response.json()
//   console.log(data);
//     }
//This process takes time so await the conversion
//     catch{
//         console.log('Error Detected');
//     }
// }

// getAllUsers()

// If we have to write the above function in .then .catch 

fetch('https://api.github.com/users/Arham2026')
.then((response) => {
   return  response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => 
    console.log(error))
