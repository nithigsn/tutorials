let name='Nithish Kumar';

// returns letter based on index
let letter=name.at(2);
console.log(letter);


// 3 methods to exctract string parts
// 1 slice based on index from to value will return
let text='Apple,Banana,Kiwi';
let part=text.slice(0,2);
// if 1 parameter will return after the index of given paramter
// if 1 will return after pple everything
console.log(part);

// 2 substring will give the extracted part
let subS=text.substring(6,12)
console.log(subS);

// uppercase
uppercase=text.toUpperCase();
console.log(uppercase);

// lowercase
lowercase=text.toLowerCase();
console.log(lowercase);

// concat
let fname="Nithish";
let ini="G.S";
let lname='kumar';
let fullname=ini.concat("",fname,lname);
console.log(fullname);

// trim removes whitespaces from both side not in the middle
let spacedText="     hello     world    ";
trim=spacedText.trim();
// removed from start
trimstart=spacedText.trimStart();
// removed from end   
trimEnd=spacedText.trimEnd();
console.log(trim,trimstart,trimEnd);


// repeat should pass number for how many times
let norepeat="hello";
let repeated=norepeat.repeat(3);
console.log(repeated);


// replaces text.... only the first match
let msg='i love you';
let replacetxt=msg.replace("love",'miss');
console.log(replacetxt);

// split will return as array
let comma="a,b,c,d,e,f";
let space='"nithish","hello","Okay"';
let splitcomma=comma.split(',');
let splitspace=space.split(' ');
console.log(splitcomma,splitspace);























