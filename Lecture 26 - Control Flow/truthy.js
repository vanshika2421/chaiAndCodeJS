const username = "vanshika22421.ai";

if(username){
    console.log("got it");
}
else{
    console.log("does not got it");
}

// falsy values -> false, 0, 0n, -0, BigInt, "", null, undefined, NaN.
// truthy values -> "0", 'false', " ", [], {}, function(){}

if(username.length ===0){
    console.log("empty string.")
}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0 ){
    console.log("object is empty");
}

// Nullish coalescing operator (??) : null undefined
// Agr tumhe pta hai k null ya undefined ayega but still you want to return some value to tumhe yai operator use krna hai.

val1 = null ?? 10; // null aya toh 10 return krdo vrna first value hi return krooooo. jab bhi use null ya undefined milega -> wo next value pr pohnch jayega.
console.log(val1);

val2 = 5 ?? 10;
console.log(val2);

val3 = undefined ?? 20;
console.log(val3);


console.log("--------------------------------------------");
// terinary operator
const icedprices = 30;
icedprices > 90 ? console.log("above 90") : console.log("less than 90");

