// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// the syntax is above
//  use case for switch case

const month =1

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("febuary");
        break;
    case 3:
        console.log("march");
        break;

    default:
        console.log("default");
        break;
}

// switch case it can be strings too

// example
const months = "january"
switch (months) {
    case "jan":
        console.log("january");
        break;

    default:
        console.log("the required string not found");
        break;
}

// how it works:

// after writing the case the  thing you write helps to compare it with the 
// the variable that you have initiated in the global scope

// break functionality helps you to break the control flow