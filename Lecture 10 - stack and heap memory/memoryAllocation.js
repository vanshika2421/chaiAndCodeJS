let yt1 = "vanshikaKamra"
console.log(yt1);
let yt2 = yt1;
console.log(yt2);
yt2 = "kamraResturant";
console.log(yt1);
console.log(yt2);

// vanshikaKamra -> yt1
// vanshikaKamra -> yt2
// vanshikaKamra -> yt1 again -> copied not changed
// kamraResturant -> yt2 again -> copied and changed

let obj1 = {
    email : "kamravanshika1@gmail.com",
    username : "vanshika2127"
}

console.log(obj1);

let obj2 = obj1;
console.log(obj2);

obj2.email = "vanshika2508.be22@chitkara.edu.in"

console.log(obj1);
console.log(obj2);

