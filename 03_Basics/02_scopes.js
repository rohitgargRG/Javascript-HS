// var c = 300

// block scope
if(true){
    let a = 10
    const b = 20
    // var c = 30 
    console.log("inner:",a);
}

// console.log(a);   -- ERROR
// console.log(b);   -- ERROR

// *****but using var won't give an error******
// console.log(c);
// this is why we avoid using var keyword   

// global scope
let a = 300
console.log(a);

for (let i = 0; i < array.length; i++) {
    const element = array[i];   
}