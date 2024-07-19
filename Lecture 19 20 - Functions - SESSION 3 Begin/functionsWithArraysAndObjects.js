// what if apne ek food ordering app bnaya 
// and usme you dont know that how much of quantity can be added in a cart which is alot already 
// and you need to add thier prices. so here you can not pass 1 2 to arguments
// arguments directyly to the funcyion so here is something to folllow

// 1, 5234
// 2, 63542
// 3. 3624
// 4. 876432
// -------> infnite... -> calculate thier sum
 
// USE THIS :


function cartPriceSum(val1, val2, val3,...num1){
    return num1;
}

console.log(cartPriceSum(1,2,3,4,5)); // first 3 values to parameters mai chli gyi jp already defined hai.
// yahaan pe ... is rest operator that is infinte number of arguments can be passed here.

console.log("-------------");

const user = {
    username : "vanshika kamra",
    price : 4523
    
}

function handleOfObject(anyObject){
    console.log(`username is ${anyObject.username} and the price is ${anyObject.price} and the course choosen by user is ${anyObject.course}`); // course gives -> undefined;
}

// handleOfObject(user); <- if function is pre-defined.


// what if user is undefined ? -> pass like this only
handleOfObject({
    username : "sam",
    price: 12,
    course: "UxDesigning"
})

// handleOfObject(); -> cannot be under written.

console.log("----------------");

const array = [200, 300, 400, 500, 600];

function myNewArray(getArray){
   return getArray[2];
}

console.log(myNewArray(array));
console.log(myNewArray([200,300,400,500,600]));