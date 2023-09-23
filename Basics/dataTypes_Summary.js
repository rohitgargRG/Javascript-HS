// Primitive data Types

// 7 types :
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt

// Reference Type or Non-Primitive datatype

// Array
// Objects
// Functions

// NOTE --> JS is a dynamically Typed Language
// In dynamically typed language, we don't declare the
// datatype of variable
// the datatype of variable is checked duing Runtime

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;      // Currently undefined

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);  // false
// id and anotherid are not same

const bigNumber = 434335435435n

//Array
const heros = ["IronMan","shaktiMan","doga"]

//List
let myObj = {
    name : "Rohit",
    age : 20,
}

// Function
const myFunc = function(){
    console.log("Hello World");
}

console.log(typeof Object); // Function
console.log(typeof myFunc); // function
console.log(typeof id); // symbol



