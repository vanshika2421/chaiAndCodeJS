


// promises ke 2 hi part hai. promise or rejection.

const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    //Database ko call kiya
    //cryptography and network.
    setTimeout(function(){
        console.log('async task is complete')
    }, 1000)
});

promiseOne.then(function(){
    console.log("Promise consumed")
}) // -> .then has direct connection with resolve. its an call back function. yahan jo bhi upr function mai kaam hua hai. yahaan wo values return krte hai

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
    },1000);
}).then(function(){
    console.log("async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "chai", userEmail : "chai@chaiAndCode.com"})
        
        // hum isme resolve function lgaare hai.taaki hum then function mai values ko pass kr skeeeeee
        // mostly cases mai resolve ke andr object hi pass hota hai. vrna you can also pass an array and others too.

    },1000);
})

promiseThree.then(function(user){ // user is a resolve function parameter.
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "vanshika2421", usercourse : "coursera"});
        }
        else{
            reject('ERROR : something went wrong');
        }
    }, 1000);
})

// value leni hai toh .then 
// value deni hai toh .catch

// promiseFour.then().catch();



 // tum ise ek variable mai declare krke return nahi krva skte. you can chain the then. 
promiseFour
.then((user) =>{
    console.log(user);
    return user.username; 
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() =>{
    console.log("Either the promise is resolved or rejected");
})

// async await ka syntax -> yai jo hai wait krta hai k kaam pura hojayee . if nahi hota hai toh error deta hai. but it waits.....isme hum catch ko handle nahi kr skte.


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let errors = false;
        if(!errors){
            resolve({username : "vanshika2421" , password : 123});
        }
        else{
            reject('ERROR : something went wrong');
        }
    }, 1000);
})


async function ConsumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(errors){
        console.log(errors);
    } 
}

ConsumePromiseFive();  

// you can use then and catch 
// or try or catch......................both are okay to use.


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json(); // -> data ko string mai convert krdiyaa
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json() 
})
.then((data) => {
    console.log(data);
})
.catch((error) =>{
    console.log(error);
})