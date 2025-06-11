let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.length, "length");

// Push element in the last
arr.push(11);

// Removes last element
arr.pop();

// adds element in the start
arr.unshift(0);

// removes first  element
arr.shift();

// returns element by the provided index
console.log(arr.at(9));

// returns elements index
console.log(arr.indexOf(5));

// returns true or false used to check whether the element is inside an array or not
console.log(arr.includes(10));

/*
Map
- doesn't modify original array
- returns new array with provided functions
*/
// this will return true or false based on the condition
console.log(arr.map((value) => value < 5));

// returns new array with provided function
console.log(arr.map((value) => value * 2));

/*
Filter
- doesn't modify original array
- returns new array with provided functions
*/

console.log(arr.filter((value) => value <= 5));

// Every ->  returns true or false | based on whether  every elements passes the provided function
console.log(arr.every((value) => value < 0));

// Some ->  returns true or false | based on at least one element passes the provided function
console.log(arr.some((value) => value > 1));

// fill - modify original array .used to replace all  or portion of an array elements with static value
// three argument value start and end
// if start and end is outbound not the index values does nothing
console.log(arr.fill(1, 22, 11));
//use full for initializing the array
let newArr = new Array(5).fill(2);

// concat adds arr
// doesn't modify original array return new array
console.log(arr.concat([11, 12, 16, 14]));

// sorts sorts element based on first character
// it converts numbers to strings 
let numbers = [9, 80, 2, 15, 30];
numbers.sort();
console.log(numbers); // ["15", "2", "30", "80", "9"]

let products = [
  { name: "Phone", price: 800 },
  { name: "Laptop", price: 1500 },
  { name: "Tablet", price: 600 },
];

// Sort by price (ascending)
products.sort((a, b) => a.price - b.price);

console.log(products);

/*
  [
    { name: "Tablet", price: 600 },
    { name: "Phone", price: 800 },
    { name: "Laptop", price: 1500 }
  ]
  */

// for sorting an array use
// ascending order
// modifies original array
// console.log(arr.sort((a, b) => a - b));

// descending order
// console.log(arr.sort((a, b) => b - a));

// reverse | Reversed the order of an array and modifies original array return the modified array
// let reversed = original.slice().reverse(); use slice if you don't want to modify original array
console.log(arr.reverse(), "Reversed Array");

//join | used to convert an array into a string by joining all its elements using a specified separator.
// console.log(arr.join(" | "));

// flat and flatMap
// used to work with nested array
// one level
let nestedArr = [1, 2, [3, 4], 5];
console.log(nestedArr.flat());
// Output: [1, 2, 3, 4, 5]

let nestedArray = [1, [2, [3, [4, 5]]]];
console.log(nestedArray.flat(2));
// Output: [1, 2, 3, [4, 5]]

// can specify depth for flat and can't specify depth for flatMap
console.log(nestedArray.flat(Infinity));
// Output: [1, 2, 3, 4, 5]  (fully flattened)

// flatmap flattens the array and can transform the data
let flatMapEx = [1, 2, 3];
let result = flatMapEx.flatMap((x) => [x, x * 2]);

console.log(result);
// Output: [1, 2, 2, 4, 3, 6]

// find | returns first element that meets the provided condition

// findIndex returns the first element's index that meet the provided condition

// splice - modifies original array
// syntax
// start – Index where modifications begin.
// deleteCount – Number of elements to remove.
// item1, item2, ... (optional) – Elements to insert at the start position.
// Returns the removed elements.
//  array.splice(start, deleteCount, item1, item2, ...)

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Remove 2 elements starting from index 1
let removed = num.splice(0, 6, 100, 101, 102);

console.log("-----------------------------------------------------------");

console.log(num, "num");
console.log(removed, "removed");

// slice
// The slice() method creates a new array by extracting elements from an existing array.
// syntax - array.slice(start, end);
// start – Index where extraction begins.
// end (optional) – Index before which extraction stops (not included).
// Returns a new array without modifying the original.

let n = [1, 2, 3, 4, 5];

let sliced = n.slice(1, 4);

// let sliced = n.slice(-2); return last two elements

console.log(sliced); // [2, 3, 4] (new array)
console.log(n); // [1, 2, 3, 4, 5] (original remains unchanged)

// Array.isArray used to check whether array or not
console.log(Array.isArray(n));

// Array.from
// ✅ Convert iterables (strings, Sets, Maps, NodeLists) into arrays.
// ✅ Convert array-like objects (arguments, HTMLCollection) into arrays.
// ✅ Use the map function to modify elements while creating an array.
// ✅ Create arrays of specific lengths with custom values

// Ex -> let arr = Array.from({ length: 5 }, (_, i) => i + 1);
