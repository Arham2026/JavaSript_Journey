// forof

// specially for array

const arr = [1,2,4,6,7]

// object = thing 

for (const num of arr) {
    // console.log(num);
}
// no iterations required


// for the strings
let name = "arhamshajahan"

for (const letter of name) {
    // console.log(letter);
}

// maps => holds in key value pairs and remembers the order
// Values would be unique.
const map = new Map()
map.set('In','India')
map.set('Us','United States Of America')
map.set('AF','Afghanisthan')

// the unique syntax to print key and value of the map seperately.
for (const [key,value] of map) {
    // console.log(key ,':-',value);
}

// but objects  are not iteratable in this way
