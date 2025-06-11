let mySet = new Set([1, 2, 3, 4, 4, 5]);

console.log(mySet); // Set {1, 2, 3, 4, 5} (duplicates removed)

/* ✅ Key Features of Set:
Stores only unique values.
Elements do not have an index (unlike arrays).
Supports methods like add(), delete(), has(), and size 
*/

let numbers = new Set();

numbers.add(20);
numbers.add(30);
numbers.add(40);
numbers.add(10); // Duplicate, will be ignored

console.log(numbers.has(10)); // true
console.log(numbers.size); // 2
numbers.delete(20)
console.log(numbers);

