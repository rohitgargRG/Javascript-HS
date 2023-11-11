// const coding = ["js","ruby","python","cpp","C"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// })

// console.log(values);  // undefined

// NOTE - forEach loop doesn't return anything

const myNums = [1,2,3,4,5,6,7,8,9,10]

// filter
// filter also takes a call back function in argument

// const newNums = myNums.filter( (num) => {
//     // num>4
//     return num>4
//     // NOTE - if you open a scope{} then writing return statement is mandatory
// } )
//console.log(newNums);

// NOTE - filter returns the elements which satisfies the given condition


// doing same thing using for each loop
// const newNums = []

// myNums.forEach( (num) => {
//     if(num >4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const myBooks = [
    {title:'Book One',genre:'fiction',publish:'1988',edition:'2023'},
    {title:'Book two',genre:'history',publish:'1989',edition:'2023'},
    {title:'Book three',genre:'comic',publish:'1990',edition:'2023'},
    {title:'Book four',genre:'history',publish:'1991',edition:'2023'},
    {title:'Book five',genre:'science',publish:'1992',edition:'2023'},
    {title:'Book six',genre:'non-fiction',publish:'1993',edition:'2023'}
];

// filtering from given database
let userBooks = myBooks.filter( (bk) => bk.genre === 'history')
userBooks = myBooks.filter( (bk) => {
     return bk.publish > 1980 && bk.genre === 'history'
})
// return statement is mandatory, since scope open
console.log(userBooks);