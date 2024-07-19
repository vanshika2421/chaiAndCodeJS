// jab {} kisi function ya if else ke sath ata hai toh use kehte hai Scope and 
// objects mai yai object declaration hota hai.

let a = 87; // global scope.

if(true) {
    let a = 7; // here a is in block scope.
    const b = 0; 
   c = 8;
    var d = 90;
    
}

var d = 900;
console.log(a); //error
// console.log(b); //error
console.log(c); //error
console.log(d); // no error cause var is global variable defined.
// a if ke andr defined hai toh uski existence sirf uske andr hi hoti hai.

// for loop mai i variable sirf loop ke andr tk hi simit rehta hai.