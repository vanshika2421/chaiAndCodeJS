let naming = "vanshika";
let city = "bathinda";
let houseNumber = 160;
let study  = " Computer Science Engineer";

console.log(`hello my name is ${naming}. I lives in ${city} and studying ${study}`);

// declaring a string dynamically -> any datatypes converts into object
let gameName = new String("FreeFire");
console.log(gameName);
// String is an object not an array here
console.log(gameName[1]);
console.log(typeof(gameName));
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(7));
console.log(gameName.indexOf('t'));

let substring = gameName.substring(0,5); //cannot give negitive values
console.log(substring);

let slicing  = gameName.slice(-7,-3);
console.log(slicing) // can give negitive value

let stringg1 = "        vanshika kamra       ";
console.log(stringg1);
console.log(stringg1.trim()); // remove spaces \

const url = "https://www.notion.so/work-9735d9649e964ff482e02098ed610adf";
console.log(url.replace(9,'-')); // replacing only one 9.
console.log(url.includes('wklmjbhj')) //check in that includes or not
console.log(url.split('9')); // jahan jahan use 9 milega wo element ko array mai daal dega
