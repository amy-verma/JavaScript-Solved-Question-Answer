//we use closure for data hiding
function x(){
    var a=10;
    function y(){
        console.log(a);
    }
    return y;
}
var z=x();
console.log(z)
z()
//when they are returned from another function they still maintain their lexical scope they remember where they were
// actually present here though x no longer exist nothing is there but still this function y still remembers its 
//lexical scope where it came from so it remebers there was something a and there was something binding strong there
//simply we can say when you do (return y) not just that function code was returned but a closure was returned,
//that closure enclosed function along with its lexical scope that was returned and it was put inside z so 
//when you execute z somewhere else in your program it still remembers a i:e the reference to a and it prints it

//function along its lexical scope bundled together forms its closure

//Closure is the combination of a function and its lexical scope bundled together with reference 
//to its surroundings state(the lexical environment).



//  In other words, a closure gives a function access to its outer scope. 
// ------------------------
// Function makes it possible for a fuction to have a private behaviour

// Key Concept: Scope Chain & Closures

// 1. Local Scope(inside a function)
// 2. Outer Scope (if nested)
// 3. Global Scope(if not found in any parent scope)
// --------------------------
    //    INTERVIEW QUESTION IN  JS

// 1. What will the output

let count=0;
(function printCount(){
    if(count===0){
        let count=1;//shadow
        console.log(count);//1
    }
    //count=0
    console.log(count)//0
 })()

//  Question 2. Write a function that would allow you to do this.

 var addSix=createBase(6)
 addSix(10)//return 16
 addSix(21)//return 27


 function createBase(num){
    return function(newnum){
        console.log(num+newnum)
    }
}
var addSix=createBase(6)
addSix(10)
addSix(21)
// -------------------------------------------
// Question 3 Time Optimization

function find(index){
    let a=[];
    for(let i=0;i<100000;i++){
        a[i]=i*i;
    }
    console.log(a[index])
}
console.time("6")
find(6)
console.timeEnd(("6"))
console.time("12")
find(50)
console.timeEnd("12")


Answer 

function find(){
    let a=[];
    for(let i=0;i<100000;i++){
        a[i]=i*i;
    }
    return function(index){
        console.log(a[index])
    }
    
}
const closure=find()
console.time("6")
closure(6)
console.timeEnd(("6"))
console.time("12")
closure(50)
console.timeEnd("12")

// function find(index){
//     let a=[];
//     for(let i=0;i<100000;i++){
//         a[i]=i*i;
//     }
//     console.log(a[index])
// }
// console.time("6")
// find(6)
// console.timeEnd(("6"))
// console.time("12")
// find(50)
// console.timeEnd("12")
// -----------------------------------
// Question 4. Block Scope and SetTimeout 

for(var i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i)
    },i*1)
}  

Answer: 

for(var i=0;i<3;i++){
    function inner(i){
          setTimeout(()=>{
        console.log(i)
    },i*1)
    }
    inner(i)//here i will be a local variable inside to this function rather then taking it 
            // from the outer scopr
}
// ----------------------
// Question 5. How would you use a closure to craete a private counter
function counter(){
    var _counter=0;
    function add(increment){
        _counter +=increment;
    }
    function retrive(){
        return "Counter=" +_counter;
    }
    return {
        add,retrive,
    }
}
const c=counter()
c.add(5);
c.add(10)
console.log(c.retrive())
// ------------------------------?

// Question. 6.What is module pattern//is similare to private function

var Module=(function (){
    function privateMethod(){//will not be accessibel outside of module pattern//not returned
        console.log("private")      //and not returing these function makes them unessessible outside
    }                         //of the module namespace
    return{
        publicMethod:function(){//But public function access these private function which make a helper 
          console.log("public")  //can call private Method  //function  example api call
        }
    }
})()
Module.publicMethod()//public
Module.privateMethod()//Error
// -------------------------------------------
// Question 7. Make this run only once

// let view;
function liketheVideo(){
    view="Amit",
    console.log("Hello",view)
}
liketheVideo()
liketheVideo()
liketheVideo()
liketheVideo()

Answer: 
let view;
function liketheVideo(){
    let called=0;
    return function(){
        if(called>0){
            console.log("Already Greet")
        }else{
               view="Amit",
                console.log("Hello",view)
                called++
        }
    }
 
}
let isSubscribed=liketheVideo()
isSubscribed()
isSubscribed()
isSubscribed()
// --------------------------------
// Question 9. Memoize Polyfill



// uses of closure
// 1. Module Design Pattern
// 2. Currying
// 3. Function like once
// 4. memoize
// 4. maintaining a state in async world 
// 5. setTimeout 
// 6. Iterators
