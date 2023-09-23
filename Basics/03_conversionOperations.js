let score = 33

console.log(typeof score); // number
console.log(typeof(score)); // number

let score1 = "33abc"

console.log(typeof score1); // string

let valueInnumber = Number (score1) 

console.log(typeof valueInnumber); // number
console.log(valueInnumber); //Nan 
// bcoz there is "33abc" -- can't be converted into number

let score2 = null
let valueInnumber2 = Number (score2) 

console.log(typeof valueInnumber2); // number
console.log(valueInnumber2); // 0

let score3 = undefined
let valueInnumber3 = Number (score3) 

console.log(typeof valueInnumber3); // number
console.log(valueInnumber3); // Nan

let score4 = true
let valueInnumber4 = Number (score4) 

console.log(typeof valueInnumber4); // number
console.log(valueInnumber4); // 1 (for true)


// Notes ---
// type conversion

// "33" => 33
// "33abc" => NaN
// true => 1; false =>0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

// 1 => true;
// 0 => false;
// "" => false
// "rohit" => true


let someNumber = 33

let strNumber = String(someNumber)
console.log(strNumber); // 33
console.log(typeof strNumber); // string