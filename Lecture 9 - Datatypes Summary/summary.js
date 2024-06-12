// There are two types of datatypes in main coding language 
// 1. primitive
// 2. Non- primitive




// primitve
// 1. they are call by value datatypes iska mtlb inka pointer ka address value mai nahi diya jata. datatype ki value ko copy kiya jata hai phir kisi or ko pass kiya jata hai
// 2. They're of 7 types -> string, number, NULL, undefined, symbol , bigint.


// symbol (kisi bhi value ko unique bnane ke liye use hota hai)
const id = Symbol(123);
const id2 = Symbol(123);
console.log(id);
// const id2 = id;
console.log(id2)

console.log(id == id2); // they are same but by applying symbol. they are unique.

//n lgaane se yai bigint
const bigNumber = 5234871980138427910487487n;
console.log(bigNumber)
console.log(typeof bigNumber)





// Non primitive
// 1.  they are refrence datatypes mtlb jab yai kisi or ko pass krna ho to iska poibter ka address pass hojata hai jis se hjme value ko copy krne ki jrurt nahi 
// Pdti
// 2. Also known as refrence datatypes
// 3.(&) <- refrence. 
// 4. They're of 3 types mainly -> arrays, functions and objects

// if you want to master javascript -> master objects and browser configurations and web events
// javascipt is a dynamic typed language -> values and variables ke datatypes only runtime mai decide hote hai.

const heros = (["shaktimaan","oneman", "Pokemon"])
console.log(heros)

let obj1 = {
    naming : "vanshika",
    addressing : "bharat nagar",
}

console.log(obj1)
console.log(typeof obj1);


const function1 = function(){
    console.log("hello world");
}

console.log(function1);
console.log(typeof function1); // it is a function object