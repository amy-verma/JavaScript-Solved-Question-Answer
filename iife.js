// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that:

// 1. Defines itself
// 2. Immediately executes right after it is defined

(function greet() {
  console.log("Hello");
})();

//arrow function
(() => {
  console.log("hello");
})();

//  Why use an IIFE?
// 1. Keep your variables private
// 1. Avoid polluting global scope  -  Variables inside an IIFE are scoped locally
// 2. Execute code immediately      - Useful for initialization or setup tasks
// 3. Encapsulation                  - Keeps variables/functions private

// Question	                                              Answer
// Is IIFE reusable by default?	                           ❌ No
// Can you call it again?	                                ❌ Not directly
// Can you assign its return to use later?     	✅ Yes, if stored in a variable

//Output Based Question
1(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1); //1
