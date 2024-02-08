const YT = new Object()
// constructor Object.

YT.userid = "arham2004";
YT.name = "arham"
YT.DOb = 6/7/2004


const regular_user = {
    Email : "some@gmail.com",

    fullname : {
        user_fullname : {
            firstname : "Arham",
            Last_time : "Shajahan"
        }
    }
}

// accessing the nested Objects

console.log(regular_user.fullname.user_fullname.firstname)

// you can also have the question near the object so that it could check
// whether it is present or not (ternary operator

// Combining the Objects

const obj1 = { 1:"t", 2:"r", 3:"u"}
const obj2 = {4: "i", 5 :"o"}

const obj3 = Object.assign({},obj1,obj2)

console.log(obj3);

// Assign method has the argument as the (target,source) 
// so if we give the {} first it would be correct according to the 
// syntax to go to the empty object.

// we can also use the spread method
console.log(Object.keys(obj1));
console.log(Object.values(obj1));

// these both the methods convert the object into the
// the arrays which will be super helpful
console.log(Object.entries(obj1));



