function one(){
    console.log("hy beta")
    function two(){
        console.log("yes mumma");
        console.log("i want to eat ice cream.");
    }
    console.log("no, your teeths will pain");
    two();
}
one();
console.log("----------------")
// what is closure?
// andr ke variables that is child functions can access 
// parent function variables.

if(true){
    const username = "hitesh";
    if(username === "hitesh"){
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website); // not acessible
}
// console.log(username); // not acessible


// ------------------- INTERSTING --------------

// There are two ways to declare functions 
// 1. functions 
// 2. Expressions
// we can return fuinctions before even declaring it -> hoisitng
// but if you define an expression instead of normal function it doesnot follow hoisting.
// variables != hoisting.
// functions (not expression functions) == hoisting.

console.log(addone(2));

function addone(num){
    return num + 1;
}

console.log(addone(2));

// console.log(addtow(2)); // this is not allowed.

// is trike ki function declaration ko expression kehte hai.
const addtow = function(num){
    return num + 2;
}

console.log(addtow(2));

