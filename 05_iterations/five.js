const coding = ["js","ruby","python","cpp","C"]

// forEach

// callback function --> does not have a name
// coding.forEach( function (item){
//     console.log(item);
// })

// using arrow function
// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// passing function inside forEach
//coding.forEach(printMe)

coding.forEach( (item,index,arr) => {
    console.log(item,index,arr);
})

// objects inside array
const myCoding = [
    {
        langName : "javascript",
        langfileName : "js"
    },
    {
        langName : "c++",
        langfileName : "cpp"
    },
    {
        langName : "python",
        langfileName : "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.langName);
})

// array.forEach(element => {
    
// });