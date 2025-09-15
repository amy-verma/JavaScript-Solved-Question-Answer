//What is the callback function
//->When a function are passed as an argument inside another function is known as callback function
//Javascript is a syncronous single threaded langauge-i-e it can do only one thing at a time in a specific order
// ->but due to callback we can do async things also inside js

// callback example
function x() {
  //here x is known as HIGHER ORDER function
}
x(function y() {
  //here y is known as callback function
});

function x() {}
x(function y() {});
y();
// a callback is a function passed as an argument to another function
// ================================================================
function greetUser(callback) {
  console.log("hello");
  callback();
}
function sayBye() {
  console.log("bye");
}
greetUser(sayBye);

// Types of Callback Functions

// 1. Named Callback

// function sayHi() {
//   console.log("Hi!");
// }

// setTimeout(sayHi, 1000); // Named function as callback

// 2. Synchronous Callback

// ⏳ Why Use Callback Functions?

// | Use Case                    | Description                                                                    |
// | --------------------------- | ------------------------------------------------------------------------------ |
// | **Asynchronous operations** | Run code **after** an async task completes (e.g., API calls, timers, file I/O) |
// | **Event handling**          | Reacting to user input (e.g., button clicks, form submits)                     |
// | **Custom logic injection**  | Let a function be reused with different behaviors                              |
// | **Functional programming**  | Map, filter, reduce, etc., all use callbacks                                   |
