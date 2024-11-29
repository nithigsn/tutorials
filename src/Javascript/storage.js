

// set data ...need two parameter name and value
localStorage.setItem("myname","nithish");



// get data from local storage
let getname=localStorage.getItem('myname');
console.log("name from local storage",getname)



// remove specific data data
localStorage.removeItem("myname");


// remove everything
// localStorage.clear();



// how to store objects and arrays
// since storage only stores strings you have to convert their type
let objStorage={
    name:"nithish",
    age:23
}

localStorage.setItem('user',JSON.stringify(objStorage));
let getobj=JSON.parse(localStorage.getItem("user"));
console.log(getobj);


let arr=[1,2,3]
localStorage.setItem("arr",JSON.stringify(arr))























