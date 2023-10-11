function one(){
    const username = "rohit"

    function two(){
        const website = "youtube"
        console.log(username);  // NO Error
    }
    // console.log(website);   // ERROR

    two()
    // if you don't call function two(), then nothing will print
    // since functions always needs to be called for execution
}

one()

if(true){
    const username = "rohit"
    if(username === "rohit"){
        const website = "youtube"
        console.log(username+website);
    }
    // console.log(website);   // ERROR
}
// console.log(username);   // ERROR


// ************* Interesting ************

// function

addOne(5); // NO Error

function addOne(num){
    return num+1
}


// expression

addTwo(5)    // ERROR

const addTwo = function(num){
    return num+2
}
