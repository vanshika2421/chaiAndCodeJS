/*
1. you can add more than one type of arrays in an array'
2. JS array creates shallow copies
3. shallow copies -> both copy and oriignal has same reference address. 
4. deep copy -> both of them have dofferent refernces.
5. array ke andr protoypes exist krte hai.
6. donot use unShift, iots time complexity is so high.
7. join() converts array elements into string.
8. slice mai values add krne ki range di jati hai or splice mai value out krne ki value di jati hai.


*/

//declaring static array
let arr = [2,3,4,6,42,6];

//declaring dynamically array
const  arr2 = new Array("hy", "hello", "hey", "heyyy", "hi");

console.log(arr[0]); 
console.log(arr2[0]);
arr.push(6);
console.log(arr.unshift(7)); 
console.log(arr);

const joinedArray = arr.join();
console.log(joinedArray);
let arr3 = arr.slice(1,3);
console.log(arr3);
let arr4 = arr.splice(1,3);
console.log(arr4);


 