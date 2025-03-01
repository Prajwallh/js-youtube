let a = "hello";
let b = " world!";

// console.log(a + b + " i am learning JavaScript"); outdated

//Modren way of writing using backticks(St)ring interpulation
console.log(`Hi my name is prajwal , iam learning JS my first program is ${a} and ${b}`);

//Declaration of a String 
const gameName = new String("CallOf-Duty");
console.log(gameName[0]);
console.log(gameName.length);  //inbuild lenght method in strings
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(4));   //character at index number
console.log(gameName.indexOf('l')); //to know the index of the character

//SubString (args (startIndex, EndIndex)) and the it considers n-1 char eg-> if 5 only 4 charecters
const newString = gameName.substring(0, 5);
console.log(newString);

//Slicing (can give index value with negative it starts from back)
const str1 = gameName.slice(-9, 5);
console.log(str1);

//trim (remove starting and end spaces)
const str2 = "         Prajwal       ";
console.log(str2);
console.log(str2.trim());


//reeplace (args ("which char to replace", "what char to replace"));
const url = "https://linkedin.com/prajwal%10L%10H";
console.log(url.replace("%10", "-"));
console.log(url.replaceAll("%10", "-"));

//includes 
console.log(str2.includes("jai"));

//Split (args ("separator", "limit")) returns an array
const str3 = `My name is rajkumar Irani`;
console.log(str3.split(" "));
