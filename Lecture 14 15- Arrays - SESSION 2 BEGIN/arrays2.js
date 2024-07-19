/* 
1. prototype is a super power of JS.
*/

let arr = [1,2,3,4,5];
let brr = [2023,"jhdfshnkw"];

// arr.push(brr); // this is not a write method to merge two array.....
// output -> [ 1, 2, 3, 4, 5, [ 42525142, 'jhdfshnkw' ] ]
console.log(arr);

//ACCESSING 2023 IN ARRAY
// console.log(arr[5][0]); 

let mergedArray = arr.concat(brr);
// console.log(mergedArray);  [ 1, 2, 3, 4, 5, 2023, 'jhdfshnkw' ]


let crr = [...arr, ...brr];
console.log(crr);

let drr = [1,2,3,4, [35,54,7,56,[42,364,364,314],46]];
let err = drr.flat(Infinity);
console.log(err);

// console.log(arr.isArray(4));

let a = 400;
let b = 9;
let c  = 5;

console.log(Array.of(a,b,c));