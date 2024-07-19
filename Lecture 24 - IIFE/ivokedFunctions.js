// IMMEIDIETLY EVOKED FUNCTION EXPRESSION

(function chai() { // -> named IIFE
    console.log("chai or code");
})(); // function ko paraenthetses mai dalne ke baad sidha execute kr ra
// yahan hume line ko khtm krna pdega tbhi jaake aage execute hoga 
// IFE isliye use krte hai kyonki global scope ke pollution se dikkat hoti hai.

((name) => { // without named IIFE
    console.log("here we go again"); 
})()