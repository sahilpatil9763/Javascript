// # Primitive Datatypes 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 36321545685465n;


// # Reference (Non Premitive) Datatypes

// Array, Functions, Objects

const heros = ["Shaktiman", "Naagraj", "Doga"]
let myObj = {
    name: "Sahil",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof anotherId);



// ====================================================

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "sahilldotcom"

let anothername = myYoutubename
anothername = "shreemanlegend"

console.log(myYoutubename);
console.log(anothername);

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "sahil@google.com"

console.log(user1.email);
console.log(user2.email);
