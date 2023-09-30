const marvel_heros = ["thor","Iron Man","spiderman"]
const dc_heros = ["superman","flash","batman"]


// marvel_heros.push(dc_heros);
// this won't merge two arrays
// in fact dc_heros array will be stored inside marvel_heros array at new last index
// since - array can store any type of data
console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

const newArr = marvel_heros.concat(dc_heros);
console.log(newArr);

// spread operator 
const allHeros = [...marvel_heros,...dc_heros];
console.log(allHeros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);


console.log(Array.isArray("rohit"));

// splits every letter into an array element
console.log(Array.from("rohit##$$"));

// ********* Interesting ***********
console.log(Array.from({name:"rohit"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));