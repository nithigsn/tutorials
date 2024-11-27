// if else
// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

let a = 3;
if (a > 4) {
    console.log(a, "is greater");
}
else {
    console.log(4, "is greater");

}


// else if
let number = 10;

if (number > 20) {
    console.log("The number is greater than 20.");
} else if (number > 10) {
    console.log("The number is greater than 10 but less than or equal to 20.");
} else if (number === 10) {
    console.log("The number is exactly 10.");
} else {
    console.log("The number is less than 10.");
}


// switch case
// if theres no brack will continue printing everything
// 
// let day = "monday";
// switch (day) {
//     case "monday":
//         console.log("hate mondays");
//         break;
//     case "sunday":
//         console.log("happy");
//         break;
//     case "sat":
//         console.log("continue");
//         break;
//     default:
//         console.log("default day");

// }

// continue works inside loops only
let days = ["monday", "sunday", "friday", "wednesday"];

for (let i = 0; i < days.length; i++) {
    let day = days[i];
    
    switch (day) {
        case "monday":
            console.log("hate mondays");
            continue; // Continue to the next iteration of the loop
        case "sunday":
            console.log("happy sunday");
            break; // Break the switch but not the loop
        case "friday":
            console.log("almost weekend");
            break;
        default:
            console.log("default day");
    }
    
    console.log("End of switch case for " + day); 
    // This will not execute if continue is used
}



// follow strict comparison for the type uses === for type 4 and "4" will throw error
switch (new Date().getDay()) {
    case 4:
    case 5:
      text = "Soon it is Weekend";
      break;
    case 0:
    case 6:
      text = "It is Weekend";
      break;
    default:
      text = "Looking forward to the Weekend";
  }


// can use multiple case for same code block