// Operations

let value = 3

let negValue = -value;
console.log(negValue); // -3

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);

console.log(2**2); // 2^2
console.log(2/3);
console.log(2%3);
*/

let str1 = "rohit"
let str2 = " garg"
console.log(str1+str2) // rohit garg
// console.log(str1-str2) // Nan

//  ***************Important Opertions****************

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

// agar string first hai to sabhi ko as a string treat kiya jaega

// agar number first hai to pehle number wala operation ho jaega then 
// operation with string

// avoid writing such type of codes

console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0

let num1,num2,num3

num1 = num2 = num3 = 2 + 2

// prefix and postfix
let gameCounter = 100
// gameCounter++;  -- 101
++gameCounter;
console.log(gameCounter);