const userEmail = "rg@rg.com"
// if string is not empty, then by default it is true

// empty string is by default false

// empty array is true
if(userEmail){
    console.log("got user email");
}else{
    console.log("don't have user email");
}

// falsy values -- (kin-kin values ko false consider kiya jata hai)

// false
// 0
// -0
// BigInt 0n
// ""               EMPTY string
// null
// undefined
// NaN

// truthy values -- (kin-kin values ko true consider kiya jata hai)

// "0"
// 'false'
// " "
// []
// {}               
// function(){}      EMPTY function


// check if array is empty or not

// if(userEmail.length === 0){
//     console.log("Array is Empty");
// }


// checking if object is empty or not
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined
//  It's often used in situations where you want to provide a default value if a variable is "nullish," which means it's either null or undefined, but not other falsy values like 0 or an empty string.


let val1;
// val1 = 5 ?? 10     // val1 = 5
//val1 = null ?? 10     // val1 = 10
 val1 = undefined ?? 15

console.log(val1);

// Ternary Operator