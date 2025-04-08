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


// uses of closure
// 1. Module Design Pattern
// 2. Currying
// 3. Function like once
// 4. memoize
// 4. maintaining a state in async world 
// 5. setTimeout 
// 6. Iterators
