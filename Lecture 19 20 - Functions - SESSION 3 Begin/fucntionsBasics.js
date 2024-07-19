// fucntions ko kaam ko asaan krne ke liye bnaya jata Hai
// jab hum kisi bhi code ko reuse krna chahte hai ya use kisi package mai bnd krna chahte hai to hum uska function bna dete hai.


function callMyName(number1, number2){
   console.log( number1 + number2 );
}

callMyName(2,3);
callMyName(3,null);

console.log("----------------");

function myCourse(num1){
    const result = console.log(num1*num1);
    return result;
}

const result = myCourse(3);
console.log("square of number : ", result); // this is invalid way of writing fucntion in any case.

console.log("----------------");

function loginUsers(username){ // predefined user value -> username = "sam"
    if(username === undefined){
        console.log("invalid argument passed");
        return; // ek bar return hogya kuch toh uske niche wala kaam hi nai krega.
    }


    
    return `${username} just logged in `
}

console.log(loginUsers("hitesh"));
console.log(loginUsers(""));
console.log(loginUsers()); // undefined value of username.




// jab bhi kuch argument kahi or se lena ho toh $ dollar sign ka use kro in the backTicks.

