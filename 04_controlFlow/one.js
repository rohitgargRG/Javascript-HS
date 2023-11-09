// if
const isUserLoggedIn = true

if (isUserLoggedIn){

}

// <,>,<=,>=,==,!=,===

// === -> checks datatype and value  (strict equal)

if(2 == "2"){
    console.log("hi");
}
if(2 === "2"){
    console.log("hi again");
}

// scope

const score = 200

if (score > 100){
    //var power = "fly"   // Scope : GLOBAL
    const power = "fight"
    console.log(`User power: ${power}`);
}

//console.log(`User power: ${power}`); // ERROR

const balance = 1000
//if (balance > 500) console.log("test"),console.log("hello");

if(balance>500) console.log("bye");

// else if ladder

if(balance <500){

}
else if(balance < 700 ){

}
else{

}

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const logggedInFromEmail = true

if(userloggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || logggedInFromEmail){
    console.log("User logged In");
}