// they both are represeting same thing so commenting one.
// document.querySelector('#clock');
const clock = document.getElementById('clock');

setInterval(function() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);



// let date = new Date(); // date is a function jo hume actual jo date hoti hai wo return krta hai.

// console.log(date.toLocaleTimeString()); // yai function har wqt refresh hone pe update hota hai or real time ko update krta rehta hai.

// lekin kya koi aisa function hai jisse mujhe uodate na krna pde?????
//  but wo khud hi point of time par change hota rahe???
 
// answer is setInterval method -> yai kehta hai k mujhe ap koi task dedo and time dedo.. i will run it continuisly within that timeeeeee
// Time exists in miliseconds.
