Q What is a Higher-Order Function?

- A higher-order function is a function that either:

Takes one or more functions as arguments (callback functions).
Returns a function as its result (function returning another function).

Examples of Higher-Order Functions

1. Function Taking Another Function as an Argument

const numbers = [1, 2, 3, 4, 5];

// Higher-order function: map() takes a function as an argument
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]

Here, map() is a higher-order function because it takes a function (num => num * num) as an argument.


---------------------------------------------------------------------------------

2. Function Returning Another Function
const multiplier = factor => num => num * factor;

const double = multiplier(2); // Returns a function
console.log(double(5)); // 10
console.log(double(10)); // 20

multiplier(2) returns a function that multiplies any number by 2.
This is an example of currying.

-----------------------------------------------------------------------------
