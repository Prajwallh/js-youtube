const score = 100;
console.log(score);

// Sometimes we have to explicitly define i want such and such as a dtatype
const balance = new Number(100000);
console.log(balance);

console.log(balance.toString());

//to limit precision values
console.log(balance.toFixed(2));

//toPrescison this functions retuns a string and rounds of the value based of the input value
const num = 23.4563;
const num1 = 123.4563;
const num2 = 1123.4563;
console.log(num.toPrecision(4));
console.log(num1.toPrecision(3));
console.log(num2.toPrecision(3));

//toLoacaleString() used represnt numbers with digits count
console.log(balance.toLocaleString('en-IN'));

Number.MAX_Value //maximum value
Number.MIN_Value //minimum value

/* MATHS IN JAVASCRIPT (comes in default with js) */

console.log(Math);  //object ing js
console.log(Math.abs(-12.34)); //coverts neg value to pos val
console.log(Math.round(4.3)); //rounds of the value to int from decimal
console.log(Math.ceil(3.5)); // rounds to highst round value
console.log(Math.floor(4.5)); //rounds of to smallest value

// Math.pow();
// Math.sqrt();
// Math.min(array); //used to find min val in array
// Math.max(array);//used to find max val in array

Math.random(); // Gives values btw 0 and 1
console.log(Math.floor(Math.random() * 10) + 1); //based o
// n values u need specify the * value + 1 is added to avoid decimal conflicts of 0.001 etc
