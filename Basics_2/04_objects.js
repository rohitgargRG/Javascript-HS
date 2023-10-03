// Singleton Object
// const tinderUser = new Object()
// When You declare an Object Using Object() Constructor
// it is a Singleton Object


const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "rohit";
tinderUser.isLoggedIn = true;
// console.log(tinderUser);


// creating objects inside objects
const regularUser = {
    email : "asa@sa.com",
    fullname : {
        userfullname:{
            firstname : "rohit",
            lastname : "garg"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj4 ={5:"e",6:"f"}

// const obj3 = {obj1,obj2}  -- not the correct way
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);

const users = [
    {
        id : 1,
        email:"rg@rg.com"
    },
]

users[0].email
console.log(tinderUser);

// ***** Important *****
console.log(Object.keys(tinderUser));
// returns an array of ids
console.log(Object.values(tinderUser));
// returns an array of values
console.log(Object.entries(tinderUser));

// if  you want to check if a property exists in the object or not
console.log(tinderUser.hasOwnProperty('id'));


