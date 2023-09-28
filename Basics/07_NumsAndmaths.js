const score = 400
console.log(score);  // 400

// explicitly defininng type of variable
const balance = new Number(100)
console.log(balance);  //[Number:100]

console.log(balance.toString()); // now it is a string
console.log(balance.toString().length);

// method use to specify the number of digits after point
console.log(balance.toFixed(2));

const otherNum = 123.854545
console.log(otherNum.toPrecision(4));

const hundreds = 10000000

// method to apply commas between zeroes acc to US standards
console.log(hundreds.toLocaleString()); 

// to apply commas acc to indian standards
console.log(hundreds.toLocaleString('en-IN'));


// ***************** Maths library**************

console.log(Math);
console.log(Math.abs(-4));  // 4
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.3)); // 5
//ceil -- means zara sa bhi value 4 se zyada hui to 
//        top value (i.e,5) hi choose hogi

console.log(Math.floor(4.9)); // 4
// floor  -- hamesha decimal ke pehle wala integer hi assign hoga

console.log(Math.min(2,3,4,5,6)); // 2
// gives minimum value

console.log(Math.max(2,3,4,5,6)); // 6
// gives maximum value

// random() method

console.log(Math.random());
// gives value between 0 and 1 (mostly decimal)

console.log((Math.random()*10) + 1);
// gives value between 1 and 10

console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// VVIP
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// prints integer value between min and max 