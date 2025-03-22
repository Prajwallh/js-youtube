//declaration of object there are two types in type of 1.literals 2.constructors Note : "When declared in literals object does not become singleton"

//Symbol
const sym = Symbol("k2"); //adding symbol in key of the object

//object literals 
const js = {
    name: "Raj",
    "fullName": "Rajkumar Rao",
    [sym]: "mykey1", //use square bractes to declare symbol in an object.
    age: 19,
    location: "banglore",
    email: "rajj@gmail.com"
};

//accessing objects
console.log(js.email);
console.log(js["email"]);
console.log(js["fullName"]);
console.log(js[sym]);
console.log(typeof sym);

//manuplate
js.email = "raju@gmail.com";
// Object.freeze(js); //object will not propgate any changes
js.email = "ey@global.com";
console.log(js);

//adding function in an object
js.greet = function() {
    console.log("hello! js USer");
}

console.log(js.greet); //gives the refference of  the function.
console.log(js.greet()); //gives output in the function

js.greet2 = function() {
    console.log(`Hello! js ${this.fullName}`);
}
//string interpulation used and this holds the current addres og the object so
console.log(js.greet2);
console.log(js.greet2());

