const hero = ["thor", "thanos", "blackPanther"];
const hero2 = ["superMan", "Batman","flash"];

//array accepts any element has data 
// hero.push(hero2); //hero accepts hero2 as a whole data

// console.log(hero);
// console.log(hero[3][1]);

//but when you concat 2 arrays you get a whole new array as the output 
const newArr = hero.concat(hero2);
console.log(newArr);

//Spread Method(glass when dropped will shatter same before declaring an array use ...dots and declare them in a new array)
const arr1 = [...hero, ...hero2];
console.log(arr1);

//flat(depth) method is used to return a new array if any of the array contains an array inside an array or more 
const arr2 = [1, 2, 3, [4,5], 65, [7, 8,[9, 10]]];
const arr3 = arr2.flat(Infinity);
console.log(arr3);


//Array.isArray(array or data to be tested) retuens boolean 
//to convert to array use Array.from(data) method
console.log(Array.isArray("Ram"));
console.log(Array.from("Ram"));
//convert object into array 
console.log(Array.from({name: "Prajwal"})); //intersting due to returns empty array because dint mention which one to convert to array key or value

//Array.of(set of elem) returns a new array from set of elements
let s1 = 100;
let s2 = 200;
let s3 = 300;
console.log(Array.of(s1, s2, s3));

