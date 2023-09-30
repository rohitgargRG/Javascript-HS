// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 23);
// month starts from 0 in js
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2023, 0, 23,5,3);
// month starts from 0 in js
console.log(myCreatedDate2.toLocaleString());

// YY/MM/DD
let myCreatedDate3 = new Date("2023-01-23");
// month starts from 0 in js
console.log(myCreatedDate.toLocaleString());

// TimeStamp
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate3.getTime());
// prints time in milliseconds from date till now

// converting into seconds
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);

// other methods
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time is`

// customising localeString Format
newDate.toLocaleString('default',{
    weekday: "long",
});


