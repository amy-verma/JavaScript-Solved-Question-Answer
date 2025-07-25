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
