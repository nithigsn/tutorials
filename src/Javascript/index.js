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
// const date = new Date().toDateString();
// console.log(date);


// nullish coalescing operator ??
// returns first value if its not nullish else returns second
// let name = null;
// let text = "missing";
// let nullish = name ?? text;
// console.log(nullish);


// optional chaining
// The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
// const car = { type: "Fiat", model: "500", color: "white" };
// console.log(car.name ?? "missing");



// let json = '{ "employees" : [' +
//     '{ "firstName":"John" , "lastName":"Doe" },' +
//     '{ "firstName":"Anna" , "lastName":"Smith" },' +
//     '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// let obj = JSON.parse(json);
// console.log(obj);




// first class function or first class citizens


// let greetings = () => console.log("Morning");
// let greet = greetings;
// greet();



// function outer(fn) {
//     return fn()

// }

// function pass(params) {
//     console.log("returning");


// }

// outer(pass)




// function outerFn() {
//     return function innerfn() {

//         console.log("im from inner function");

//     }

// }


// callinner = outerFn();
// callinner()






// let a = 10;
// a=12;
// console.log(a);




// window.alert(b)

// if(true){
//     var x=10
// }
// console.log(x);






// let obj={name:"nithish",age:23}

// for(let x in obj){
//     console.log(obj[x]);
// }

// let arr=[1,2,3,4,5,6,"okay"]

// for(let x in arr){
//     console.log(arr[x]);
    
// }
// let name="Nithish"

// for(let x of arr){
//     console.log(x);    
// }


















































