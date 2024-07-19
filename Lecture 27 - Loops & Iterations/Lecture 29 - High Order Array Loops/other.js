// map jpo hai key value return nahi krta sidha value return krta hai.

const myArray = [1,32,4,56,7,324,3,53,423];

const newArray = myArray.map((num) => num + 10);

console.log(newArray); 
const newArray2 = myArray.map((num) => { return num + 10});


const arr = [1,2,3,,4,5,6,7,8,9,10];

const newArr = arr
            .map((num) => num * 10)
            .map((num) => num + 1)
            // .filter((num) => num >= 40);
console.log(newArr);