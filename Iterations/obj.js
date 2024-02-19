const obj ={
    js: 'Javascript',
    cpp : 'c++',
    tail : 'tailwind',

}

// for in loop for the objects
for (const key in obj) {
    // console.log(obj[key]);
    }
// if we went through this syntax then only the value gets printed

// so if we want both key and values then follow the below syntax

for (const key in obj) {
    // console.log(`${key} shortcut is for ${obj[key]}`);
    }

const heroes = ['ryangosling','christian Bale','Cillian Murphy','Bryan Cranston']

for (const names in heroes) {
  
    // console.log(`My favourite Actors in Hollywood are ${heroes[names]}`);
}

// here  the key would be the Index of the array in the for in loop .

const map = new Map()
map.set('In','India')
map.set('Us','United States Of America')
map.set('AF','Afghanisthan')

for (const key in map) {
    console.log(key);
}

// The map is not iteratable in the forin loop.

// arrays = forof loop
// obj = forin loop


