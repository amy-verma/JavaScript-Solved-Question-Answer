//Object in JAVA SCRIPT

// Concept of delete keyword in JS
// 1. const user={
//     name:"Amit",
//     age:25
// }
// delete user.age
// console.log(user)//5

2;
//How to call a string inside an object
const user = {
  name: "Amit",
  age: 25,
  "I am amit": true,
};
console.log(user["I am amit"]);

3;
//How to delete an object property
const user1 = {
  name: "Amit",
  age: 25,
  "I am amit": true,
};
delete user1["I am amit"];
console.log(user);

4;
//How to add a dynamic property to an object
const property = "firstname";
const name = "Amit Verma";

const user = {
  [property]: name,
};
console.log(user);

// 5. To print the keys of an object

// const user={
//     name:"Amit",
//     age:25,
//     isAmit:true,
// };
// for(let key in user){
//     console.log(key)
// }

//6. To print the values of an object

// const user = {
//   name: "Amit",
//   age: 25,
//   isAmit: true,
// };
// for (let key in user) {
//   console.log(user[key]);
// }

Output Based Question
// 1. What is the output of the following
const user={
    a:"one",
    b:"two",
    a:"three",
}
console.log(user)//a:"three", b:"two"
// 2. What is the output of the following
let nums={
    a:100,
    b:200,
    title:"My Nums"
}
mutiplyByTwo(nums)


// asnwer// The output will be:
function mutiplyByTwo(obj){
    for(let key in obj){
        if(typeof obj[key]==="number"){
            obj[key]*=2
        }
    }
}
console.log(nums)

3.// What is the output of the following
// const a={}

// const b={key:"b"}
// const c={key:"c"}
// a[b]=123
// a[c]=456
//     console.log(a[b])// Output: 456

// 4.  What is JSON.stringify() and JSON.parse() in JavaScript?
// // JSON.stringify() converts a JavaScript object into a JSON string.
// const user = {
//     name: "Amit",
//     age: 24,
// };

// console.log(JSON.stringify(user));

// Interview Question
// 1. 📦 Why use JSON.stringify()?
// - To send data to the server over the internet
// - To save data into localstorage or a File
// localStorage.setItem("test",strobj)
// - to see a full object as a string for  debugging.

// 2. 📦 Why use JSON.parse()
// const user={
//     name:"Amit",
//     age:24,
// }
// const strobj=JSON.stringify(user);
// localStorage.setItem("test",strobj)
// console.log(JSON.parse(strobj))//to object

// 3. What is the output of the following code?
// console.log([..."amit"])// Output: ['a', 'm', 'i', 't']

// 4. const user={name:"amit",age:25}
// const admin={admin:true,...user}
// console.log(admin)// Output: { admin: true, name: 'amit', age: 25 }


// 5. const setting={
//     username:"Amit",
//     level:189,
//     health:20,
// }
// const res=JSON.stringify(setting,["level","health"])
// console.log(res)// Output: {"level":189,"health":20}

6. What is destructuring in JavaScript?
let user={
    name:"amit",
    age:25
}
const {name}=user
console.log(name)

// 7. Nested destructuring in JavaScript
// let user={
//     name:"amit",
//     age:25,
//     fullname:{
//         first:"Piyush",
//         last:"Agarwal"
//     },
// }
// const name="Roadside coder"
// const {
//     fullname:{first},}=user

// console.log(first)

// 8. let c={greeting:"Hey!"}
// let d;
// d=c;
// c.greeting="Hello";
// console.log(d.greeting)// Output: Hello

// 9. 
// console.log({a:1}=={a:1})//false
// console.log({a:1}==={a:1})//false

10.let person={name:"amit"};
const member=[person]
person=null
console.log(member)// Output: [{ name: 'amit' }] - The object is still referenced in the array.

11. 
// function changeAgeandReference(person){
//     person.age=25;
//     person={
//         name:"John",
//         age:50,
//     };
//     return person
// }
// const personobj1={
//     name:"Alex ",
//     age:30,
// }
// const personobj2=changeAgeandReference(personobj1)
// console.log(personobj1)
// console.log(personobj2)
