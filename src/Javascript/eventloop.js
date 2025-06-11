const fs = require("fs");

console.log("1️⃣ Synchronous code");

setTimeout(() => console.log("5️⃣ setTimeout"), 0);

setImmediate(() => console.log("4️⃣ setImmediate"));

Promise.resolve().then(() => console.log("3️⃣ Promise"));

fs.readFile(__filename, () => {
  console.log("6️⃣ File Read Callback");
});

console.log("2️⃣ More synchronous code");
