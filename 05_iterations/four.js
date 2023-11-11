const myObj = {
    'js' : "javascript",
    'cpp' : "c++",
    'rb' : "ruby", 
}

// use for in loop to iterate through objects

// for in loop
for (const key in myObj) {
    // console.log(key);
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

// maps

// NOTE - maps are not iteratable
