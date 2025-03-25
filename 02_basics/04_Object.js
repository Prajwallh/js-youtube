// const tinde = new Object();    //singleton object 
const tinder = {};                                      //non singleton object
tinder.username = "Hima";
tinder.age = "34";
tinder.email = "hima@gmail.com";

// 

//Object inside an Object 
const acc = {
    email: "praju@gmail.com",
    fullName: {
        username: {
            firstName: "Prajwal",
            lastName: "LH"
        }
    }
};

console.log(acc.fullName.username);

//combining objects
const obj1 = {1: "a" , 2: "b"};
const obj2 = {3: "a" , 4: "b"};
const obj3 = {5: "a" , 6: "b"};

//using common method but it creates problem of object inside object
// const obj4 = {obj1, obj2};
// console.log(obj4);

//Object.assign(target, source) to combine objects
// const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);

//or we can use spread method
const obj4 = {...obj1, ...obj2};
console.log(obj4);

//from database values come in form of array of objects

const users = [
    {
        id: "1",
        email: "p@dmail.com"
    },
    {
        id: "2",
        email: "p@dmail.com"
    },
    {
        id: "3",
        email: "p@dmail.com"
    }
];
console.log(users[0].id);

//accessing keys and values in an Object
console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
//below method gives the keys and values in pair
console.log(Object.entries(tinder));
// to check weather the mentioned property is present or not
console.log(tinder.hasOwnProperty("email"));

//destructring of object
const course = {
    name: "JavaScript",
    fee: "99",
    mentor: "yt"
};

const {name: courseName, fee, mentor} = course;
console.log(courseName);
