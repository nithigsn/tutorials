/*
In JavaScript, apply(), call(), and bind() 
are methods available on functions.
They are used to control the value of this and invoke functions in different ways. 
*/

// 1.Call method
// syntax: function.call(thisArg, arg1, arg2, ...)

function greet(greeting) {
  console.log(`${greeting} ${this.name} `);
}

const person = {
  name: "Nithish",
};
greet.call(person, "hello");
