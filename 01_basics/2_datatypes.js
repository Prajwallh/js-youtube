"use strict"; //use newer version of js (traet all JS code as newer version)
//alert("hello!")  wer using node JS not browser

//Readbility is important in every code

let name = "prajwal";
let age = 10;
let isLoggedIn = true;
let sate = null;

//  ====PRIMITIVE DATATYPES======
//number => 2 to power 53
//bigInt => when number is very big
//String => ""
//boolean => true or false;
//null => standalone value 
//undefined => when value is not defined
//symbol => used find uniqueness btw the components

// =======OBJECTS==========

console.log(typeof age);
console.log(typeof null); //object 
console.log(typeof undefined); //undefined


//ConverstionsOperations (typeCasting)

let marks = 33;
console.log(typeof marks);
//Converting marks (number) to (string)
let score = String(marks);
console.log(typeof score);

//Sometimes we get NaN (not a number) in case we convert strin gto number and we get 0 when we convert null, undefined = NaN, string = NaN.
// "33" => 33
// "33abc" => NaN

let isLogged = 1;
let booleanLogged = Boolean(isLogged);
console.log(booleanLogged);
// 1=> true
//0 => false
// "" => false
// "prajwal" => true

let num = 23;
let stringNum = String(num);
console.log(stringNum);
console.log(typeof stringNum);





