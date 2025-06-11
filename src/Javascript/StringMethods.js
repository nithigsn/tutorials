let myName = "Nithish";

// returns length of the string
console.log(myName.length);

// returns character based on the index value
console.log(myName[2]);

// returns character based on the index value
console.log(myName.charAt(2));

// returns charcode of the character
console.log(myName.charCodeAt(2));
// String.fromCharCode(code) will return the string

// returns index of the character
console.log(myName.indexOf("N"));

// slice return portion from start to end excluding the end supports negative index
console.log(myName.slice(2, 5));
console.log(myName.slice(-7));

// concat
console.log(myName.concat("Kumar"));



// splits a string into an array based on a specified delimiter.
// returns array
// syntax -> string.split(separator, limit);
console.log(myName.split("",5));


// includes check string contains specific sub-string
// syntax -> string.includes(searchString, startIndex); -> search substr and position to start from


let txt = 'I Love You';
console.log(txt.includes("Love"));


// replace("math","replace txt") -> replace first match
// replaceAll() -> replace every match
console.log(txt.replaceAll("o",'1'));


// trim() -> removes whitespace from start and end
// trimStart() -> removes whitespace from start only
// trimEnd -> removes whitespace from end only

// padStart(length,"value")
// let txt = "Hell0"
// txt.padStart(10,"-") OP -> "-----Hello"

// padEnd(length,"value")
// let txt = "Hell0"
// txt.padStart(10,"-") OP -> "Hello-----"


// startsWith("value",index)=> if index 
