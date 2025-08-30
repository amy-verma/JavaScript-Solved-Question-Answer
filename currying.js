function add(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}
console.log(add(2)(3)(4))
  
  // Why Use Currying?
  // 1. Reusability: You can partially apply a function.
  // 2. Cleaner code in functional pipelines or libraries like Lodash, Ramda, React (HOCs), etc.
  // 3. Helps in function composition and functional programming.

// Q. What is currying?
// A. Currying is a function that takes one argument at a time and returns new function
// - Basically currying does not call a function . It just transforms a function
// - They are constructed by chaining closures by immediately returning their inner functions
//  simultaneously.

// Q. Why should we use currying?
// A. It helps to avoid passing the same variable again and again
//   - It makes the function pure which makes it expose to less errors and side effects
// ---------------------------

// // Why is Currying Useful?
// 1. Partial Application: Currying allows you to "fix" a certain number of arguments for a function 
//    and leave the rest to be provided later. This is known as partial application.

// const addTen = add(10);  // Currying to create a new function that always adds 10.
// console.log(addTen(5));   // 15

// 2. Reusability:
// 3. Cleaner and More Maintainable Code:
// 4. Function Chaining:
Question 1. sum(2)(3)(4)(5)

// sum(2)(6)(1)

function sum(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(sum(2)(3)(0))
// -----------------------------------------
// Question 2. 
// evaluate("sum")(4)(2)=>6
// evaluate("multiply")(4)(2)=>8
// evaluate("divide")(4)(2)=>2
// evaluate("subtratct")(4)(2)=>2


// evaluate("sum")(4)(2)=>6
// evaluate("multiply")(4)(2)=>8
// evaluate("divide")(4)(2)=>2
// evaluate("subtract")(4)(2)=>2

function evaluate(operation){
    return function(a){
        return function(b){
            if(operation==="sum") return a+b;
            else if(operation==="multiply") return a*b;
            else if(operation==="divide") return a/b;
            else if(operation==="subtract") return a-b;
            else return "Invalid Operation"
        }
    }
}
let mul=evaluate("multiply")
console.log(mul(2)(5))
// console.log(evaluate("sum")(2)(3))
// console.log(evaluate("multiply")(2)(3))
// -----------------------------------------------

Question 3.Infinite Currying 
sum(1)(2)(3)...(n)

function sum(a){
    return function(b){
        if (b) return sum(a+b);
            return a;
    }
}
console.log(sum(2)(3)(4)(2)())



function sum(a){
    let total=a;
     function inner(b){
         if(typeof b ==="undefined" ) return total;
         total+=b
         return inner
     }
     return inner
}
console.log(sum(1)(2)(4)())
// ------------------------------
Question 4. Currying vs Partial Application
Question 5. Manupulationg DOM

    <h1 id="heading">Amit</h1>


function updateElementText(id){
    return function(content){
        document.querySelector("#"+id).textContent=content;
    }
}
const updateHeader=updateElementText("heading")
updateHeader("Hello Amit")


///////////////////////////////////////////////////////

function add(a,b){
    if (b) return a+b;
    else{
        return function (b){
            return a
        }
    }
}

 console.log(add(3)(4))
console.log(add(2,3))

