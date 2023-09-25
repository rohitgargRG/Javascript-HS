const name = "rohit"
const repoCount = 50

// console.log(name + repoCount+" value");

// Use This syntax To print
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

// Another syntax to initialize a string
const gameName = new String('rgRohitGarg')

// characters in a string are in key value pairs
console.log(gameName[0]); // r
console.log(gameName.__proto__);

// to find length of string
console.log(gameName.length);
console.log(gameName.toUpperCase());
// original value is not changed , a copy is created with All Uppercase letters

// to check  a character at particular index in string
console.log(gameName.charAt(2));

// to check the index no of a character 
console.log(gameName.indexOf('g'));


