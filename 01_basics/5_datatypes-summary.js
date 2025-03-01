/*
1. Primitive 
7 types : String , number , boolean, null, undefined, bigInt, Symbol.

2. Javascript is dynamically typed language.

3. Reference type(Non Primitive)
types : Arrays, Objects, Functions.

4. Symbol
const id = Symbol('420'); 



*/

const id = Symbol('420');
const anotherId = Symbol('420');
console.log(id == anotherId);
console.log(anotherId);

//Arrays
const heros =[ "Himan", "superman", "spiderman"];

//Object
let obj = {
    name : "hitesh",
    age: 22,
}

// function 
const myFunc = function(){
    console.log("Hello world!");
}


// +++++++++++++++ Stack ANd Heap Memory++++++++++++++++++++  //
/*
 * Stack (Primitive dt use stack memory copies are returned)  
 * Heap (Non primitive dt use heap memory which gives reffrece any changees will be done to original value)
 * Below are examples of Stack and heap
 */

//Stack
let ytname = "chaiaurcode";
let anothername = ytname;
anothername = "code with harry";

console.log(ytname);
console.log(anothername);

//Heap 
let userOne = {
    email: "user@gmail.com",
    sal : 34000,
}

let userTwo = userOne;

userTwo.email="hitesh@google.com";

console.log(userOne);
console.log(userTwo);
