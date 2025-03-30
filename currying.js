function add(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}
console.log(add(2)(3)(4))

1️⃣ Currying
Your function is an example of currying, where multiple arguments are taken one at a time instead of all at once.

////////////////////////////////////////////////////////////////////////
✅ Currying: The process of breaking down a function with multiple parameters into a series of unary functions.
✅ Closures: Each function retains access to the variables from its outer function.



// Higher-order function returning another function
const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t;
      }
      return doWhatEver;
    }
    return doSomething;
  }
  
  // Calling the function
  console.log(higherOrder(2)(3)(10));
  