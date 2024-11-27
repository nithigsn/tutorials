

//array iteration methods

// 1 forEach
let numArr=[1,2,3,4];

// calls a function (call bak function) once for each array element ...wont create new array
let foreachmethod=numArr.forEach((value,index,arr)=>console.log(value));

// 2 Map
//same as for each but creates new array ..wont execute the function for array elements without values
//wont change original array
let mapmethod=numArr.map((value,index)=>console.log(value*2));
console.log('map',numArr); //op => [1,2,3,4]



//3 filter
// creates new array that passes the test
let filtermethod=numArr.filter((value)=>value>1);
console.log("filter",filtermethod);


// 4 Reduce   doesn't reduce original array
let reducemethod=numArr.reduce((value,total)=>total+value);
console.log(reducemethod);



//5 Every  ...checks if values pass a test returns... true or false
let every=numArr.every((value)=>value>1);
console.log(every);


// 6 some will check some array pass the test
let some=numArr.some((value)=>value>1);
console.log(some);






//spread  spready the array and can add array 
let a=[1]
let b=[1]
let c=[1]
let d=[1]
let letters=[...a,...b,...c,...d];
console.log(letters);










// // flattenMap
// const arr = [1, 2, 3];
// const result = arr.flatMap(x => [x, x * 2]);
// console.log(result);
// // Output: [1, 2, 2, 4, 3, 6]

// const arrmap = [1, 2, 3];
// const resultmap = arr.map(x => [x, x * 2]);
// console.log(resultmap);
// // Output: [[1, 2], [2, 4], [3, 6]]

// // map(): Produces a new array, each element transformed based on the callback.
// // flatMap(): Maps each element, then flattens the result into a single array (by one level of nesting).
