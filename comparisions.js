// > or < 
// != , ==
// no problems in the same comparisions
// Interesting thing is when we compare different data types

// data type should be same when we compare the datatypes.

// with the null
// null is treated as 0 when we use >= but with the other operations it differ

// equality check and the >= works in different way.

console.log("2" == 2)
// the above code connverts the data type.

console.log("2" === 2)
// the above code doesn't convert the data type.

// Avoid the below given Code disciplinary

console.log(null == 0); 
// here the null is COnverted in to the nan type
console.log(typeof (null)); 

console.log(null > 0);
console.log(null >= 0); 
// Above null gets Converted into 0


