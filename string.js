const name = "arham"

const repCount = 50

// console.log(name + repCount);
// instead

// string interpolation
console.log(`my name is ${name} and my repo count is ${repCount}`);

// declaration of the string.
console.log(typeof name);

const game = new String('check')
// the above is a string object.
// it is a constructor
// because of it is an Object it is stored in the Heap memory
// here game is the object and check is the string.
// console.log(typeof game);
// it is an Object.

console.log(game.__proto__)
// different types of methods in the Object
console.log(game.length)
console.log(game[0])
// or

console.log(game.indexOf('h'))
// .substring(in,out)
// .slice(in,out) negative Values can be used.
// trim() removes the starting space and the end white space.
// trimstart() and trimend()


// replace('onething','withotherthing') for changing a thing with the other
// .includes() whether a particular thing is available in the string or not

// .split('seperator like - ')
