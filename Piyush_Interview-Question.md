Q.  Why do closures exist in JavaScript?
- Closures exist in js because they provide a way for function to "remember" and access their lexical 
 scope even after the function has finished executing. 


function outer(){
    let x=10;
    function inner(){
        console.log(x)//inner remembers x
    }
    return inner
}
let z=outer()//outer is done//but x is remembered
z()//42 //the ability to remember x is called closure


This is a fundamental feature of JavaScript's design and serves several important purposes:

1. Data Encapsulation and Privacy
- Closures allow you to create private variable that cannot be accessed directly from outside a function.
- This is useful for encaptulation logic and protecting data from being accidently  modified.

function makeCounter(){
    let count=0;//Private variable
    function inner(){
        return count++
    }
   return inner
    
}

let res=makeCounter()
console.log(res())//0
console.log(res())//1

2. Maintaining State  OR 2. Asynchronous Code Needs to Remember State
- Think of setTimeout, fetch, or event listeners. Closures allow these functions to "remember" the right variables even after the outer code has finished.

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // closure lets us remember `i`
  }, 1000);
}

- Without closures, there’d be no way to “remember” what i was during each loop iteration.

4. Functional Programming Style
- JavaScript supports functional programming, where closures are foundational:

1.  Functions returning other functions
2. Currying
3. Partial application
4. Memoization

All of these patterns rely on closures.

Therefore: 
Closure exist because JS uses lexical scope, meaning a function scope is determined by its position 
in the source code.
- When a function is created it captures reference to its variable in outer scope,forming a closure.
- This design makes JS highly flexible and powerful for functional programming, modular design and
async workflows.
---------------------------------------------------------------------------------------
Question 2. How does the event loop actually work?
- The event loop is what lets JS perform asyncronous tasks- without blocking the main thread- 
by managing queue of events and executing them one at a time.
-----------------------------------------------------------------------------------------

Question 3. Why can you call a function before it's declared?
- You can call a function decleration before it is defined because js hoist function decleration to the
top of their scope before the code runs.

greet(); // ✅ Works

function greet() {
  console.log("Hello!");
}
- Even though greet() is called before the function is written, it works — because JavaScript hoists the entire function declaration to the top.

Question-
What gets hoisted?
1. Function declarations:

sayHello(); // ✅ Works

function sayHello() {
  console.log("Hi!");
}


2.  What doesn't get hoisted (fully)?

❌ Function expressions:
sayHello(); // ❌ TypeError: sayHello is not a function

var sayHello = function () {
  console.log("Hi!");
};
-------------------------------------------------------------------------------