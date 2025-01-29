//What is the callback function
//->When a function are passed as an argument inside another function is known as callback function 
//Javascript is a syncronous single threaded langauge-i-e it can do only one thing at a time in a specific order
// ->but due to callback we can do async things also inside js 

// callback example
function x(){ //here x is known as HIGHER ORDER function

}
x(function y(){ //here y is known as callback function 

})


function x(){

}
x(function y(){

})
y()
// a callback is a function passed as an argument to another function