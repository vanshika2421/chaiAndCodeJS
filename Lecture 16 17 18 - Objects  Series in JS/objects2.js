const igUser = new Object(); // <- singleton
const igUser2 = {}; // <- non-singleton
// console.log(igUser);
// console.log(igUser2);

igUser.id = "okay.aarav";
igUser.name = "aarav sharma";
igUser.request = 314;
igUser.followers = 320;
igUser.folowwing = 34;
igUser.isLoggedIn = true;

// console.log(igUser.followers);

const snapUser = {
    userId : "vanshikaakamra@gmail.com",
    userBestFriends : {
        // hearted : 1,
        nonHearted : {
            name1 : "tamana",
            name2 : "bhumi",
            images :{
                tamana : 23,
                bhumi : 5
            }
        }
    }
}

console.log(snapUser.userBestFriends.nonHearted.images.bhumi);



//THESE METHODS ARE LESSER USED
// object assign ek methoda hai jo concat ki trh kaam krta hai........it merges and combines two or more ojects.

const obj1 = {1: 'a' , 2: 'b'};
const obj2 = {3 : 'c', 4: 'd'};

const obj3 = Object.assign(obj1,obj2); // <- prefrable is ({}, obj1, obj2);
// {} <- empty object/array <- saaare sources (obj1 and obj2) isme hi jayenge.

// console.log(obj3);


// MORE USED
const obj4 = {...obj1, ...obj3};
console.log(obj4);


// array ka object
const igUser3 = [
    {
        id: 1,
        email: "kamravanshika1@gmail.com"
    },
    {
        id : 2,
        email: "vanshikakamra0@gmail.com",
    },
    {
        id : 2,
        email: "vanshika2508.be22@chitkara.edu.in",
    }
]

console.log(igUser3[1].email);
console.log("-------------------------")
console.log(Object.keys(snapUser));
console.log("-------------------------")
console.log(Object.values(snapUser));
console.log("-------------------------")
console.log(Object.entries(snapUser));
console.log("-------------------------")
console.log(snapUser.hasOwnProperty('nonHearted'));