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

//function along its lexical scope bundled together forms its closure

//Closure is the combination of a function and its lexical scope bundled together with reference 
//to its surroundings state(the lexical environment).