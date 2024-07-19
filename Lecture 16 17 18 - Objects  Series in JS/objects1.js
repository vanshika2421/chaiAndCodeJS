/*

1. singleton -> koi bhi object jab ap bnate hai to wo ek hi object bnta hai.
2. when you declared as a litreal, singleton nahi bnat hai. -> object ko declare krne ka trika.
3. constructor se hmesha singleton hi bnega
*/

const mysymbol = Symbol("key 1");

const customer3 = {
    nameofCustomer : "mr. sharma",
    ordered : ["noodles", "manchurian", "fried noodles", "sandwiches"],
    dateOfOrder : "2024-27-05",
    mysys : "mykey1", // <- change krdi value of symbol , abhi iska type string hai.
    [mysymbol] : "mykey1",
    totalBill : 1978,
    fullfilled :true,
    "Address" : "Bharat nagar" // <- you can not access it  normal . (customer3.Address)
}

console.log(customer3.ordered[3]);
// console.log(customer3[ordered]) <- wrong way , give it as a string
console.log(customer3["ordered"]);  
console.log(customer3["Address"]);
console.log(customer3["mysys"]);
console.log(customer3["mysymbol"]);
console.log(typeof customer3["mysys"]);
console.log(typeof customer3["mysymbol"]);
customer3.totalBill = 376;
console.log(customer3["totalBill"]);  
Object.freeze(customer3);
customer3.totalBill = 37600;
console.log(customer3["totalBill"]);  



customer3.greeting = function(){
    console.log("hello customer, welcome to our restuarnt")
}
// console.log(customer3.greeting)
// this se hum kisi bhi constructor ke andr ki properties ko access kr skte hai

customer3.greeting2 = function(){
    console.log(`hello customer , $(this.nameofCus tomer)`);
}

console.log(customer3.greeting);
console.log(customer3.greeting2);