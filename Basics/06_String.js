const name = "rohit"
const repoCount = 50

// console.log(name + repoCount+" value");

// Use This syntax To print
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

// Another syntax to initialize a string
const gameName = new String('rgRohitGarg')

// characters in a string are in key value pairs
console.log(gameName[0]); // r
// this is not an array,these are the key value pairs
console.log(gameName.__proto__);

// to find length of string
console.log(gameName.length);
console.log(gameName.toUpperCase());
// original value is not changed , a copy is created with All Uppercase letters

// to check  a character at particular index in string
console.log(gameName.charAt(2));

// to check the index no of a character 
console.log(gameName.indexOf('g'));


const newString = gameName.substring(0,4);
console.log(newString);
// this will print elements at index no 0,1,2,3

// slice
const anotherString = gameName.slice(-8,4);
console.log(anotherString);

// trim
const newStringOne = "   rohit   garg    ";
console.log(newStringOne);
console.log(newStringOne.trim());
// trim removes the whitespace from beginning and end 
// of the string
// it does not remove whitespaces from between the string


// replace
const url = "https://rg.com/rg%20garg";
console.log(url.replace('%20','-'));
// this means that replace %20 i url by -

// to check whether our string includes this or not
console.log(url.includes('rohit'));

// split
const splitElement = "rohit-rg-garg"
console.log(splitElement.split('-'));
// split whenever - comes

// NOTE - See all String Methods from console and MDN

