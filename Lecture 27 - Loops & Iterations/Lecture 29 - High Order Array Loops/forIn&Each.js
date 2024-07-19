
// const myObject = {
//     js : 'javaScript',
//     cpp : 'c++',
//     rb : 'ruby',
//     swift : "swift by apple"
// }

// for (const key in myObject) {
//     // console.log(`this ${key} is a shortcut for ${myObject[key]}`);
// }

// const array = ["apple", "mango", "banana", "strawberry"];
// for (const key in array) {
//     // console.log(`at ${key} , this ${array[key]} is present `);
// }

// // MAP ko loop ki tarah iterate nahi kiya ja skta.

// // call back function ka naam nahi hota.
// const coding = ["apple", "mango", "banana", "strawberry"];

// coding.forEach(function (item) {  // item yahan pe call back function hai.
//     // console.log(item);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme);

// coding.forEach(item => {

// })




// this is very important to undertsand
// because database always comes up with an arrays and 
// arrays always has values in the form of objects.
const arr = [
    {
        studentsName : "vanshika",
        companyName : "Microsoft",
    },
    {
        studentsName : "Hemant",
        companyName : "TaskUs",
    },
    {
        studentsName : "parul",
        companyName : "Google",
    }
]

arr.forEach((item) =>{
    console.log(item.companyName);
})

const values = arr.forEach((item) => {
    console.log(item);
    return item;
})

console.log("----------------------");

const numbers = [1,2,3,4,5,6,7,8,9,10];
const myNums = numbers.filter((num) => num > 5);
console.log(myNums);  

const mynumss = numbers.filter((num) =>{
    return num > 5;
})
console.log(mynumss)

console.log("-------------------------------------");

const books = [
    {
        bookname : 'it starts with us',
        read : 'yes',
        title : 'book seven' 
    },
    {
        bookname : 'it starts with us',
        read : 'No',
        title : 'book seven' 
    },
    {
        bookname : 'it starts with us',
        read : 'yes',
        title : 'book seven' 
    }
]

const userBooks = books.filter((bk) => bk.read == 'yes'); 
console.log(userBooks);