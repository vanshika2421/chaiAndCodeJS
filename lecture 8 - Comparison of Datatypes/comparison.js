// ***** Basic Comparison Operators *****

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

// issues begin
console.log("-------------------------")

console.log(true <= 3);
console.log(null == 0);
console.log(null >= 0);
console.log(undefined == 3);

console.log("-------------------------")
console.log("2" == 2) //check only value
console.log("2" === 2) // check for value + datatype

/*
== and other comaprison operators work differently
Comparisons convert null into number, treating it as 0
isliye hi
null >= 0 is true
but 
null > 0 is false 
They're not that accurate
Dekha jaye to null and undefined ka comaprison operator se koi lena dena nahi hai
but they work like it isliye interview ke liye inka pta hona kaafi jruri hai. 
undefined mai == >= <= tino mai false hi return krega 
and null ke liye >= mai true and > ke liye false
*/