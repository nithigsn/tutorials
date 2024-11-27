=>  TS is a syntatctic superset of javascript.basically adds syntax on top of JS.allows developers to add type

=> When creating a variable, there are two main ways TypeScript assigns a type:
1.Explicit - writing the type Ex --> let name:string="Nithish"
2.Implicit TS will guess based on the value Ex-> let name="Nithish"

=> Type any is a type that disables type checking and effectively allows all types to be used. (don't use any often)

=> can assign null and undefined
let y: undefined = undefined;
let z: null = null;



=> Array
const names:string[]=[];
readonly will prevent arrays from being chanaged
const names:readonly string[]=[];


=>Tuples 
is a typed array with a pre-defined lenght and types of each index
best practice is to make readonly
// define our tuple 
let ourTuple:readonly [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];



=>Object Type
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};

optional properties
const car: { type: string, model: string, year?: number } = {
  type: "Toyota",
  model: "Corolla",
};
without optional will throw error


=> Enum
An enum is a special "class" that represents a group of constants (unchangeable variables or related variables).
Enums come in two flavors string and numeric

enum Direction {
    North,
    East,
    South,
    West
}
function move(direction){
    console.log('moving in the ${Direction[direction]}');
}
move(Direction.left)


then for status codes
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);



=> Type Alias 
used to define type with a custom name
type myage=number
type myname=string

type me={
    name:myname,
    age:myage
}


=>Interface
Interfaces are similar to type aliases, except it apply to object types.
interface Me{
    name:string,
    age:number
}


interface can extend
Example
interface About extends Me{
city:string,
pincode:number
}

const aboume:About={
    name:"nithish,
    age:23,
    city:"mtp",
    pincode:22222
}




=>Union Type | OR
Using the | we are saying our parameter is a string or number:
Ex
function statusCode(code:string | Number){
    console.log(code)
}

statusCode(200)
statusCode("200")



=>Function
has type for funnction parameters and return values

number says this function will return number
function getTime(): number { 
  return new Date().getTime();
}

if function doesn't return anything we can use type void
function printHello(): void{
  console.log('Hello!');
}

parameter if no paramater ts will take any type
function addNum(a:number,b:number){
    return a+b
}

=> Optional paramter
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

=>Default Parameters
function add(a: number, b: number, c: number=10) {
  return a + b + c;
}


Type Alias in function

type Add = (a:number,b:number)=>number;

const addNum:Add=(a,b)=>a+b



=> utility Types

--> Partial    changes all the properties in an object to be optional.
interface Me{
    name:string,
    age?:number
}
let objMe:Partial<Me>={};

--> Required     changes all the properties in an object to be required.even if its optional in interface

interface Me{
    name:string,
    age?:number
}
let objMe:Required<Me>={values};












