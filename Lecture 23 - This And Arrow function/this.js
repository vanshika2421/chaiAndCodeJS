const user = {
    username : "vanshika",
    price : 888,
    welcomeMessage : function(){
        console.log(`Mr/Mrs/Ms  ${this.username} welcome to our website`);
        console.log(this); // yahhan pr this ek pura function return krega. this means accessing parent class/Function. (whole object);
    },
    
}

user.welcomeMessage()
user.username = "shukla g";
console.log(user.username);

console.log(this); // here is empty object;
console.log("-----------------");


function neww(){
    console.log(this);
}

neww();

console.log("--------------");

const ArrowFunction = () =>{
    console.log("kaise tu gungunaaye, muskuraaye");
    console.log("choti choti baato pe muh fulaaye");
    console.log(this);
}

ArrowFunction();

// () => {} -> this is arrow function

// Simple Arrow Function
let arrowFunction2 = (num1, num2) => {
    return num1 + num2;
}

console.log(arrowFunction2(5,3));

// actual arrow function statement

let add = (num1,num2) => (num1 + num2);
console.log(add(4,5));

const map