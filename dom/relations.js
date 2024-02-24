
const parent = document.querySelector('.parent')
// console.log(parent)
 // console.log(parent.children) 
 // the type of the parent.children is the Html collection.(we can access through index)
 // we can access the inner html and the inner text
for(let i = 0; i < parent.children.length; i++){
    console.log(parent.children[i].innerHTML);
 
}  