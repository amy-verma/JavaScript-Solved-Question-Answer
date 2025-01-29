1. What is JavaScript?
->JavaScript is a light weight interpreted programming language with first-class-function.
->it is scripting language for WebPages.
->Js is a prototype-based,multi-paradigm,single-threaded,dynamic (variable can be changed at run time),case-sensitive language.
->It support object-oriented,impertive,and declerative,(eg-functional programming)
->Js is a protypal behaviour

2. What is first-class-function
The ability of the function to be used as values and can be passed this as an argument to another funtion and can be 
returned from the function this ability is known as first calss function in JS,
->when function in that language are treated like any other variable.
ex-a function can be passed as an argument to other function,
   ->can be returned by another function and
   ->can be assigned as a value to a variable.

   EXAMPLE---------


const test=function (name){   //passing a function to a variable-

return `Hello,${name}`;
}

console.log(test("amit"));


const test2=function(newFun,name){  //can be returned by another function and
console.log(newFun(name))
}
test2(test,'sumit')

const createmultiplier=function(multiplier){  //Returning a function from another function
    return function(number){
        return number*multiplier
    }
}
const double=createmultiplier(2)
console.log(double(5))

OOOOORRRRRRRRRRRRRRRR-----------

function sayHello() {       //Returning a function from another function
  return () => {
    console.log("Hello!");
  };
}


2. What are the data types supported by JavaScript?
           
              return type
1. Null--->    Object
2. undefined-  undefined
3. Boolean      boolean
4. number      number
5. bigint     bigint
6. string       string
7. symbol       symbol


3. What is the difference between `let`, `const`, and `var`?
-> var - declared function scoped or  globally-scoped variable.
        -It can be updated and re-declared in the same scope.
        -It optionally initialize each to a value
        -It can be declared without initialization.
        -These variables are hoisted.

->let- declared re-assinable ,block scope local variable
       -It can be updated but cannot be re-declared in the same scope.
        It optionally initialize each to a value
        -It can be declared without initialization.
        -These variables are hoisted but stay in the temporal dead zone untill the initialization.

->const-Is a block scope local variable  
        -It can neither be updated or re-declared in any scope  
        -It cannot be declared without initialization.   
        These variables are hoisted but stays in the temporal dead zone until the initialization. 

4. Explain how `==` and `===` differ.

5. What is a closure?
->Closure is the combination of a function bundled together with reference to its surroundings state(the lexical 
environment).

function x(){
    let a=10;
    function y(){
        console.log(a)
    }
    return y;
}
const z=x()
console.log(z)
z()

6. What is hoisting?
-> Hoisting is a phenomenon is which variable and function decleration are moved to top of their containing scope during the execution phase before the code is actually run

a()
console.log(x)
function a(){
    console.log(a)
}
var x=10

7. Explain the concept of "this" in JavaScript.
->The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

8. What are JavaScript prototypes?
-> Prototype are the mechanism by which JS Object inherit features from one another
-> Inside prototype we get methods i:e forEacg,map,pop,push...and then again at last we get prototype i:e call
   inheritence and there we get constructor,toString,valueOf
->Js has a default behaviour i:e  prototypal behaviour
   First level Prototype is-  Array->Object->null
                            function->object->null
                            string->object->
                            



9. What is the difference between `null` and `undefined`?

Undefined

undefined-when JavaScript allocates memory to all its variable and function to the variables it tries to put a placeholder i:e
           in the memory that special keyword is undefined 
           -undefined is like taking memory
            
           -it is a special keyword takes up its own memory/placeholder which is kept for time being until the variable is assigned some other value till that point it will store this placeholder i:e undefined 
         
  console.log(a) //undefined
  var a=7       
  
  
  console.log(a)//7

  not-defined-not allocated any memory

  NULL- 

  The null value represents the intentional absence of any object value. It is one of JavaScript's


10. How does JavaScript handle asynchronous operations?
->Js handles asyncronous function using cambination of callback,promises and async/await syntax.
-these allows js to perform task without blocking the main thred, making it possible to handle task like,
- network request,file reading or timers efficientlt.

- Event loop cordinates btw call stack, callback queue, microtask queue to handle async operation.
- The event loop ensures non-blocking  execution by deffering async task to the callback/microtask queue,
  which are processeed once the call stack is empty

a.  Asynchronous Mechanisms
 
-> 2. Callbacks
- a callback is the function passesd as an argument to another function to be executed later,
  often an async operation finishes.

setTimeout(()=>{
console.log("logs later")
},2000)

console.log("this logs first")


b. Promises.
-a Promise is an object which represents the eventual completion or rejection of async operation

const promiseone=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise resolved")
    },1000)
    resolve()
})
promiseone.then(()=>{
    console.log("promise consumed")
})

c. Async/await
- async/await provides a cleaner syntax for working with promises.
-async function returns a promise, and await pauses the execution of thr function until the promise resolves

const promiseone=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise resolved")
        resolve(" resolved")
    },1000)
    
})
async function consume(){
    const response=await promiseone
    console.log(response)
}
consume()


11. What is a promise?
-> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

look at promise.js 

12. What are async/await functions?
13. Explain event delegation in JavaScript.
-> Event delegation is a technique where you add a single event listener to a parent element to handle events on its child elements.
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  document.getElementById('list').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      console.log('Item clicked:', event.target.textContent);
    }
  });
</script>

14. What are JavaScript modules?
15. How can you prevent a function from being called multiple times?
16. What is the event loop?
17. What is the difference between `apply()` and `call()` methods?
18. What is `bind()` method used for?
19. What is a JavaScript event loop?
20. Explain the concept of "event bubbling" and "event capturing".
-> Event bubbling and event capturing are mecanism tht determin the order of which event handlers are trigered when a 
   when a event occurs on a DOM element nested within other elements.
 Event Bubling-
 in case of event bubbling the onclick child method will be called first then it moves up to the hierarchy till the end of the DOM thn onClick parent method will be caled thethen the grandparent method will be called 

 Opposite to this is event capturing likr upward down the DOM tree  || trickling down
 Capturing aka Trickling

 Usage

 in addEventHandler method we can passs third argument as a boolean useCapturei:e true /false and the basis of this 
 browser decide to bubble or trickle


 
document.querySelector(#grandparent).addEventListner('click',()=>{
    console.log("Grand Parent Clicked")
},false)

document.querySelector(#parent).addEventListner('click',()=>{
    console.log("parent clicked")
},false)

document.querySelector(#child).addEventListner('click',()=>{
    console.log("child clicked")
},false)



21. What is the difference between `deep copy` and `shallow copy`?
- Shalow Copy





22. What are generator functions?
23. What is the `new` keyword used for?
    1. is responsible for the above Syntax 
    2. is responsible for invoking the constructor and creating a unique instance every single time no matter how many tim eit is used
    a new copy of the entire object will be created
    3. it also takes care of this keyword -by moving this keyword from the global object to inside of this object
    4. here it is not a regular function call this keyword is not going to point towards the window object that is why we are 
    able to use this coz it is pointing inside the object
24. How do JavaScript’s `setTimeout` and `setInterval` work?
    working of setTimeout
    -it takes the callback function and stores it into some place and attaches a timer of 3ms to it stores somehere and Js
    proceeds it does not wait for anything it just goes to the next line and print   Namaste Javascriot and once the time 
    expires it takes that function puts it again to the call stack and runs it

25. What is a `WeakMap` and how is it different from a `Map`?
26. What is a `Set` in JavaScript?
27. What is `Object.create()` used for?
28. How does JavaScript’s garbage collection work?
29. What are "decorators" in JavaScript?
30. Explain the difference between `prototype` and `__proto__`.