let str: string = 'hello';
var num: number = 10;


const names: string[] = [];
names.push("hello");


// tuples
// fixed length arr and fixed type
let me:readonly[string,number,boolean]=["Nithish",23,true];



interface CarObj {
    type: string,
    model: string,
    year: number,
    km?: number

}



type Obj = {
    type: string,
    model: string,
    year: number,
    km: number | string

}



const car1: CarObj = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};


//   const car2 : CarObj= {
//     type: "Toyota",
//     model: "Corolla",
//     year: 2009
//   };







function addNum(a: number, b: number) {
    return a + b

}

console.log(addNum(10, 20));





interface 
type
function return type
tuple
optional
default parameter


