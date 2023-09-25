// two types of memory

//  stack  -- (used to store Primitive data type)
//         -- Whenever a variable is defined in stack memory,
//            a copy of that variable is assigned.

//  Heap   -- (used to store Non-Primitive data type)
//         -- whenever a variable is defined in Heap memory,
//            a reference of that variable is assigned.

let myName = "Rg"
let anotherName = myName
anotherName = "xyz"

console.log(anotherName); // xyz
console.log(myName); // Rg
// since these are primitive data types,they are stored in stack memory
// Hence a copy is created here , so there will be
// no change in value of myName


let user1 = {
   email : "abc@abc.com",
   upi : "wdw"
}

let user2 = user1

user2.email = "rg@rg.com"

console.log(user1.email);
console.log(user2.email);
// Since,here this is a non prmitive data type
// hence it is stored in heap memory, so we will get a 
// reference of that variable
// so changing any value in user1 will lead to change of
// value in user2




