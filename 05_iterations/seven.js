const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// similar to filter
//const newNums = myNumbers.map( (num) => num + 10)
// const newNums = myNumbers.map( (num) => {return num + 10})

// chaining
const newNums = myNumbers
                .map( (num) => num *10)  // result of this will be passed to next chain
                .map( (num) => num+1)            // this will do calculations according to new values passed from prev chain
                .filter( (num) => num >= 40)

console.log(newNums);