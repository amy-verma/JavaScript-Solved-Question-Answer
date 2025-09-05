// Generator function are special function that allow you to pause or resume execution.
// They are useFul for managing iterative process,async code

// Example

function* generator() {
  yield "hello";
  yield "hi";
  yield "hey";
}
const res = generator();
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());

// Q. 1. What is a generator function in JavaScript?
// - A generator function is a special type of function that can be paused and resumed during its execution.
// Unlike normal functions that run to completion, generator functions yield values one at a time using the
//  yield keyword.

// 3. What does the yield keyword do inside a generator function?
// - The yield keyword pauses the generator and returns a value to the caller.
// The function execution can later be resumed from the point it was paused using .next().

// 5. What does the .next() method do on a generator object?
// It resumes execution of the generator function and returns an object: