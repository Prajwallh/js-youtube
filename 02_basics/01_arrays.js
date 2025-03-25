//Arrays in JavaScript

const a1 = [1, 2 , 3, 5];  //Declaring array
const a2 = new Array(3, 45, 65);  //Declaring array
console.log(a1[3]);         //Accsesing using indexing
// console.log(a2);
//Interview
/* When arrays are copied(copy operation) it creates shallow copies(copy of the object which share same object reference ) Deep copy is the vice versa which do not share same object reference */

//---------METHODS IN ARRAYS--------------\\
const heros = ["IronMan", "Hulk", "CaptainAmerica", "BlackPanther"];

//PUSH
// a1.push(10); // adds element at the end of the array
a1.push(7);
console.log(a1);

//POP
a1.pop(); //removes the last elemnt of the array
console.log(a1);

//Unshift Method
a1.unshift(6); //adds the value at the begining of the array
console.log(a1);

//Shift MEthod
a1.shift();
console.log(a1);   //removes the element at the begining of the array


console.log(a1.includes(10));     //tells wheater the specified value is in araay or not
console.log(a1.indexOf(85));  //gives the index of the number or the specified data in the arrays (returns -1 if data not there)

//join method
const a3[] = a1.join();  //this method joins the data to the new variable declared and converts it to string datatype
console.log(a3);

//slice or splice
console.log("A" , a1);
console.log(a1.slice(1,3));  // this method returns the value of the array range .slice(startRange, endRange) when returned value does not include end index eg:(if 3 (n-1) only till 2 index values are printed)
console.log("B", a1);

//splice 
const a4 = a1;
console.log("C",a4);
console.log(a4.splice(1,3)); //this also does the same as slice but it changes the value of original array and includes the endIndex
console.log("D",a4);




