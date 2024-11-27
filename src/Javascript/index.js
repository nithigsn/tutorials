// // types of consoles
// console.log("hello");
// console.log("hello world! 1");
// console.info("my info");
// console.warn("my warning");
// console.error("my error");
// console.table([0, 1, 2, 3]);

// // change text
// document.getElementById('edit-text').innerHTML='Hello';

// //change attribute
// document.getElementById('main-img').src='./2,jpg';

// // dynamic html
// document.getElementById("demo").innerHTML = "Date : " + Date();

// // change css
// document.getElementById('edit-text').style.color='blue';

// //function
// function changeName() {
//     document.getElementById('change').innerHTML='Hello Changed'  
// }




// create date
const date= new Date().toDateString();
console.log(date);


// nullish coalescing operator ??
// returns first value if its not nullish else returns second
let name = null;
let text = "missing";
let nullish = name ?? text;
console.log(nullish);


// optional chaining
// The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
const car = {type:"Fiat", model:"500", color:"white"};
console.log(car?.name ?? "missing");





















