my_numbers = [1,4,5,6,77,55,44,33,20]

// let newnum = my_numbers.map( (num) => num + 5 )
// console.log(newnum);

// we could do it in the for loop too.
let newnums = []

 my_numbers.forEach( (num) =>{
    newnums.push(num +5)
 } )
// console.log(newnums);

// multi methods at a time. the chaining of the methods

// .map() it is same as the filter it returns the values as the filter

// chaining in the methods

const newsnum = my_numbers.map( (num) => num * 10)
                          .map((num) => num + 1)
                          .filter((num) => num> 69)

// console.log(newsnum);
// map performs the operations whereas the filter just plays the game of true or flase


// reduce()
// what does this do? -> 

const my_nums = [1,2,3,4]

// let mytotal = my_nums.reduce( function (acc,currval) {
    // console.log(`${acc} , ${currval}`);
    // the value you give after the comma at the end of the func goes to the acc (0)
    // and the currval takes up the current value of the arrays
    // return acc +currval
// },0)

// reduce is for adding of the arrays.

// console.log(mytotal);

// writing the above function in arrow function

let mytotal = my_nums.reduce( (acc,currval) => acc + currval, 0)
 console.log(mytotal);

//  reduce also returns the values like filter and map loops.

// this thing is used in the shop market bills



