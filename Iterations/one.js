// for loop

// declaration , condition , the opeeration in the loop , iteration.
for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 0; i <=10; i++) {
    // console.log(`outerloop value ${i}`);
    for (let j = 0; j <=10; j++) {
        
    // console.log(`Inner Loop Value ${j} outer loop Value ${i}`);
        
    }
    
}
// in here the outer loop runs 1 time then inner loop would run 10 times

// printing the  table using the above loop


for (let i = 0; i <=10; i++) {
    // console.log(`outerloop value ${i}`);
    for (let j = 0; j <=10; j++) {
        
    // console.log(`${i} * ${j} = ${i * j} `);
        
    }
    
}

let myarr = ['christian Bale','ryanGosling','rdj','CillianMurphy','Tomholland','leonardo Dicaprio','hero']

for (let i = 0; i < myarr.length; i++) {
    const element = myarr[i];
    // console.log(element);

}
// array length is counted from 1 and the index is counted from the 0

// keyword => Break , Continue

// print 1 to 20

for (let index = 0; index <=20; index++) {
    if(index==5){
        // console.log(`Detected ${index}`);
        break
    }
    // console.log(`The value is ${index}`);

     
}

// continue
for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log(`Detected ${index}`);
        continue
    }
    console.log(`The value is ${index}`);
    
}

// remember the continue like forgiving once while playing the game.





