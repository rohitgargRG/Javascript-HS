// syntax
function saymyName(){
    console.log("hello");
}

 // call
saymyName(); 

//----------------parameters
function addTwoNum(num1,num2){
    return num1+num2;
    // console.log("hello");    useless
    // nothing will get executed after the return statement
}

//-------------------Arguments
console.log(addTwoNum(12,23));

const result = addTwoNum(2,3);
console.log("Result : ",result);

function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("please enter a username");
    //     return;
    // }
            // OR

    if(!username){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged In`;
}

console.log(loginUserMessage("rohit"));
console.log(loginUserMessage());

// assigning some default values to parameters

function funcWithDefaultValue(username = "rg"){
    return `${username} jus logged in`;
}

console.log(funcWithDefaultValue("rohit"));
console.log(funcWithDefaultValue());

// rest operator
// returns an array
function calculateCartPrice(val1,val2,...num1){
        return num1;
}

console.log(calculateCartPrice(200,400,500,300,2000));

const user = {
    username : "rohit",
    price : 2000
}

function handleObj(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObj(user);
handleObj({
    username : "rg",
    price : 1000
})

const myNewArray = [200,400,500,600];

function returnSecond(getArray){
    return getArray[1];
}

console.log(returnSecond(myNewArray));

//      OR
//  passing an array directly as a parameter during function call
console.log(returnSecond([100,200,300,400]));


