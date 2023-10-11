const user = {
    username : "rohit",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// this --> refers current context

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

console.log(this);  // EMPTY in Node environment

// function chew(){
//     let username = "rg"
//     // console.log(this.username);   -- undefined
// }
// chew()


// Arrow function

const chew  = () => {
    let username = "rg"
    console.log(this);   // undefined
}

// chew()

// syntax 

const addTwo = (num1,num2) => {
    return num1 + num2
}
// jab bhi curly braces use krenge, so return keyword is must

console.log(addTwo(3,4));

// implicit return

// const addThree = (num1,num2) => (num1+num2)
// jab bhi parenthesis use krenge , tab no need to use return keyword

// returning an object
const addThree = (num1,num2) => ({username:"rohit"})

console.log(addThree(4,5));



