//const is used to store constant values
const accountId = 144553;

//let is used to declare a variable in js
let accEmail = "Raj@gmail.com";

/*
Prefer not to use var bcz of issue in block scope and functinal scope(global scope)
 */
var accPass = "2418";

//not preffred to use this way but variable can be declared this way..
accCity = "Banglore";

// accountId = 2; cannot be changed
accEmail = "hsfc@gmail.com";
accPass = "1806";
accCity = "jaipur";
console.log(accountId);

//used to dispaly all the variables at once
console.table([accEmail, accPass, accCity])

// a variable without values is defined as undefined..
