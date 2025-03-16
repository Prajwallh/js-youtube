//Dates
//date is a typeOf Object;
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString()); //gives only the date
console.log(myDate.toISOString()); //The toISOString() method converts a Date object into a string, using the ISO standard.
console.log(myDate.toJSON()); //same as toISOString()
console.log(myDate.toLocaleString());//toLocaleString() method formats a Date object as a string according to the specified locale
console.log(myDate.toTimeString());

// let newDate = new Date(2024, 0, 18); //month always starts from 0 in javascript
// let newDate = new Date(2024, 0, 1, 5, 3); can mention time also if needed
// let newDate = new Date("2023-01-20"); // YYYY-MM-DD
let newDate = new Date("06-18-2002"); // MM-DD-YYYY
console.log(newDate.toDateString());

//------------------TIMESTAMP-------------------------------\\
let timeStamp = Date.now(); 
console.log(timeStamp);
console.log(newDate.getTime()); //returns milliseconds from start date till now
console.log(Math.round(timeStamp/1000));


let date1 = new Date();
console.log(date1.getDay());
console.log(date1.getMilliseconds());
console.log(date1.getMonth());
console.log(date1.getFullYear());
console.log(date1.toLocaleString('default',{weekday:"long"})); //customizesation of loacle string for specific and accurate values.

