// for of loop 

const arr = [1,2,3,4,5];

// for (const iterator of object) {
    
// }

for (const num of arr) {
    console.log(num);
 }

 const greetings = "hello World";

 for (const greet of greetings) {
    console.log(`Each char is : ${greet}`);
 }

 // MAPS in JS    --> see mdn reference

 const map = new Map()

 map.set('IN',"India")
 map.set('USA',"united states")
 map.set('Fr',"france")

 //console.log(map);

 for (const [key,value] of map) {
    console.log(key,':-',value);
 }

 const myObject = {
    'game1' : 'FIFA',
    'game1' : 'spiderman'
 }


// ERROR in case of objects
//  for (const [key,value] of myObject) {
//     console.log(key,':-',value);
//  }

// NOTE - for of loop does not iterate through objects

