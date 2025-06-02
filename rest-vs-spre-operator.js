// 1. ... in JavaScript = Rest or Spread Operator

// 2. Rest Operator (...)
// 3. Gathers the remaining argument or properties into an array or object
// 4. useful in function parameters or destructuring.

//  Example 1: Rest in Function Parameters
//  function sum(...args) {
//     console.log(args); // [1, 2, 3]
//   }
//   sum(1, 2, 3);
//   --------------
// Example 2: Rest in Array Destructuring
const {first,others}=[1,2,3,4,5]
console.log(first)//1
console.log(others)//2,3,4,5

// Example 3: Rest in Object Destructuring
// const   {name,...rest}={name:"amit",age:28,city:"Delhi"}
// console.log(rest)// { age: 25, city: "Delhi" }


// ---------------------------------------------
// 2.  Spread Operator (...)
// -  "Spreads" elements of an array or object out — useful for cloning or passing values individually.

// Example 1: Spread in Function Calls
// const num=[1,2,3]
// console.log(...num)//1,2,3
// -------------------------------
// Example 2: Spread to Clone Arrays

// const a=[10,20]
// const b=[...a,30]
// console.log(b)//10,20,30

// Example 3: Spread to Clone Objects

// const user={name:"amit",age:25};
// const updated={...user,city:"Delhi"}
// console.log(updated)/// { name: "Amit", age: 25, city: "Delhi" }
// -------------------------------------------------------------------


// REST Example

function addNumber(a, b, c) {//when we normaly call a function
    return a + b + c;
}
let rest = addNumber(2, 3, 4);
console.log(res);
// -----------------------------

// using rest operator

function addNumber(a,b,c,...other){//in rest element gets combined
    console.log(other)//in es6 [ 5, 6, 7 ]
return a+b+c 
}
let res=addNumber(2,3,4,5,6,7)
console.log(res)
// --------------------------------------------
// SPREAD IN Array 

let names=["Amit","sumit","sourav"]

function getNames(name1,name2,name3){
    console.log(name1,name2,name3)
}
getNames(...names)//spread operator

// ---------------------------------------------------------------------------
// REST IN OBJECT 
// const student={
//     name:"amit",
//     age:28,
//     hobby:["football"]
// }
// const {age,name}=student;//array destructuring
// console.log(age,name)

// --------------------------
// const student={
//     name:"amit",
//     age:28,
//     hobby:["football"]
// }
// const {age,...rest}=student;//in case of object using rest operator(to combine)
// console.log(rest)
// // -------------------
// SPREAD , change the age

const student={
    name:"amit",
    age:28,
    hobby:["football"]
}
const {age,...restt}=student;//array destructuring
console.log(rest)

var newStudent={
    ...student,
    age:29,
}
console.log(newStudent)//will get the updated object