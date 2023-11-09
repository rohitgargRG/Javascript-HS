// Immediately Invoked Function Expressions (IIFE)

(function chew(){
    // named IIFE
    console.log(`DB Connected`);
})();     // NOTE - ; is must here,if you do not put ; here
          //          then it will give error when you use IIFE further in code


// syntax
// ()();

// passing argument and using arrow function in IIFE
((name) => {
    console.log(`db connected two ${name}`);
})('rohit');


