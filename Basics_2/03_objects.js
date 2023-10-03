//  Singleton

// object literals

// Object.create

const mySym = Symbol("key1")

// syntax to create objects
// objects have key : value pairs
// object Literal
// Non-singleton Object
const jsUser = {
    name : "rohit",
    "full name" : "rohit garg",
    // using Symbol as a key
    [mySym] : "key1",
    age : 20,
    location : "nagpur",
    email : "rg@rg.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","saturday"]
}


// ways to access object variables
console.log(jsUser.email);
console.log(jsUser["email"]);

// we cannot access "full name" using . operator
// for that we can only use [] notation

// console.log(jsUser."full name");     ----> ERROR
console.log(jsUser["full name"]);

// printing symbol
console.log(jsUser[mySym]);

// changing key value in an object
jsUser.email = "rg@gmail.com";

console.log(jsUser);

// What if you want create a non-changeable object
// Object.freeze(jsUser);
// now you cannot modify any key value in jsUser object
jsUser.email = "rg@rg.com";  // Useless
// console.log(jsUser);


// adding a function in object
jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greeting2 = function(){
    console.log(`hello js user , ${this.name}`);
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greeting2());