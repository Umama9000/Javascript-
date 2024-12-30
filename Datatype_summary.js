//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



const num = 1223; // Number

const stri = "Umama fatima"; //String 

const bool = true; //Booleean

const Nul = null; //Null

let valueIn; //Undefiened

const slly = Symbol("999th");
const anotherslly = ("999th");
console.log(slly === anotherslly); //Synbol

let arr = [ "books, library, students"];
console.log(arr); //Arry


let obj = {
    name:"umama",
    age: 16
}; //Object

console.log(obj);
