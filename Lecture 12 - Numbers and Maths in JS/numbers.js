const num = 500;
const num2 = new Number(500.7654324);
// jab bhi hum new mai define krte hai (dynamically) toh wo datatypes bhi btat hai output mai 
console.log(num);
console.log(num2);

//constructor
//toExponential
// toFixed -> precision value control krne ke liye hi yai bnaya gya hai.
console.log(num2.toFixed(2)); // here 2 is count after dot
// precision -> float value after Dot.
// toLocalString
// toPrecision -> biggest precision ko smallest mai define krne ke liye
console.log(num2.toPrecision(6)); // here 6 is total length count of num2
console.log(num2.toPrecision(2)); // actual number se chota number privide kroge toh exponential mai dega
//toString
//valueOf