// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2 == 1);
// console.log(2 != 1);

// problem arises when we try to compare two different datatypes

console.log("2" > 1);  // true
console.log("02" > 1); // true

// NOTE - Always make sure that the values which you are
//        comparing must have same datatype.

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); // FALSE
console.log(undefined > 0); // flase
console.log(undefined < 0); // false

// ===  
// checks value along with its dataype

console.log("2" === 2); // false