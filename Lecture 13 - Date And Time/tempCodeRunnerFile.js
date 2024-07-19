let timee = Date.now();
console.log(timee); 
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getHours());

// theLocaleString mai tum object mai proper function call de skte ho. most useful thing ever in date and time of js

newDate.theLocaleString('default',{
    // write function here.
    //can define one or more properties
    weekday : 'long', 
})