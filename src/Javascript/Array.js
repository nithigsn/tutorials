let arr=[1,3,5,6,7,9,100,100];




// // access first
// let num=arr[0];
// console.log(num);

// // access last
// let last=arr[arr.length-1];
// console.log("last array",last);


// // find lenght of an array
// let length=arr.length;
// console.log(length);


// // loop array
// for(let i=0;i<length;i++){
//     console.log(arr[i]);
// }


// add into arr
arr.push(10);
arr.push(20);
console.log(arr);


// type of arr will be object
// so how to check whether its an array or not
console.log(Array.isArray(arr));
// return true
console.log(typeof(arr));
// object
console.log((arr instanceof Array));
// return true



// methods
// make it string
convertstr=arr.toString();
console.log(convertstr);

// join will work as toString but joins string with parameter
join=arr.join("*");
console.log(join);


// pop remove element and push add element
//pop removes last element
arr.pop()

// push add elements to the last
arr.push("added");


// shift and unshift
// opposite to pop and push


//remoes first element
arr.shift();

// adds first element shift right side
arr.unshift("hello")
console.log("added hello in  first",arr);


// concat array
let negNum=[-1,-2];
let concat=arr.concat(negNum);
console.log("concat arr",concat);


// splice method add element in array to a specific index
// also remove element if second value is not 0
// alters original array
arr.splice(2,0,100,200);
console.log("spliced arr",arr);



// slice will remove elements
let slice=arr.slice(5);
console.log("sliced",slice,"old",arr);


// includes check elements is in the array
// returns true or false
let includes=arr.includes("hello");
console.log("hello is in arr so ",includes);


//find finds the first element based on provided function
// returns value
let find=arr.find((value)=>value === 100);
console.log("hello is in arr",find);


// findIndexOf will find index of d matching element by provided function
let findindex=arr.findIndex((value)=>value === 100);
console.log("index of 100 is",findindex,"see",arr);



// will remove duplicate values
let uniqueArr=[...new Set(arr)]
console.log("removed duplicate",uniqueArr);

// sort array alphabetically
// will change arr
// sortedArr=arr.sort();
// console.log(sortedArr);


// toSorted
let numArr=[9,5,7,8,3,2,]
let tosort=numArr.toSorted();
console.log("sort",tosort);



let numbers = [9, 5, 7, 8, 3, 2];
// Find the lowest and highest numbers
let lowestNum = Math.min.apply(null, numbers); // Use null as the first argument
let highestNum = Math.max.apply(null, numbers); // Use null as the first argument

// Output the results
console.log("Lowest number:", lowestNum);  // 2
console.log("Highest number:", highestNum); // 9



























