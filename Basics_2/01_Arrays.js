//  Array

// const myArr = [0,1,2,3,4,5,true,"rg"];

const myArr = [0,1,2,3,4,5];
const myHeroes = ["shaktiman","batman"];

const myArr2 = new Array(10,20,30,40);

console.log(myArr[1]); // 1

// Array methods

// to add element at the end of array
myArr.push(6);
myArr.push(7);
console.log(myArr);

// to remove/delete the last value from array
myArr.pop();
console.log(myArr);

// to add element at the beginning of array
myArr.unshift(9)
console.log(myArr);

// to remove/delete element at the beginning of array
myArr.shift()
console.log(myArr);

// to check whether a value is present in array or not
console.log(myArr.includes(9)); // false
// returns boolean value

// to check index of an element
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));
// returns -1 if element is not present in the array


// to bind and convert the array into a string
const newArr4 = myArr.join()

console.log(myArr);
console.log(newArr4);
console.log(typeof newArr4);  // string

// slice,splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3);
console.log("C ",myArr);
console.log(myn2);





