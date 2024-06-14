// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

let mydate = new Date(); //date ek function hai apne aap mai which is object
console.log(mydate); 
console.log(mydate.toString()); //Fri Jun 14 2024 12:25:01 GMT+0530 (India Standard Time)
console.log(typeof mydate);  //object
console.log(mydate.toDateString()); // //Fri Jun 14 2024
console.log(mydate.toLocaleDateString()); //6/14/2024
console.log(mydate.toLocaleString()); //6/14/2024, 12:25:01 PM
// Months in javascript start from 0 (0 - 11);
let myCreatedDate =  new Date(2024, 3, 27); // making ate by myself
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let ddmmyy = new Date("2024-04-27") // here month starts from 1;
console.log(ddmmyy);
console.log(ddmmyy.toLocaleString()); 


