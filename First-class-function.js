b()
a()
//Function statement  aka Function Decleration
function a(){
    console.log("amit")
}
//During the hoisting phase/memory creation phase a is created a memory and the functon os assigned to a


//in case of function expression this b is treated as any other variable 
//it is assiged initially until the code goes to var b,and when js executes this line by line and reaches this line then the 
//function is assigned to variable b until then it is undefined
//Function Decleration
var b=function b(){
    console.log("sumit")
}

//Function Decleration

//Anonymous function
--annonymous function are used in the place where function are used as a values
function (){

}

//Named function expression
var b=function b(){
    console.log("xyx")
}

//Difference btw parameter and argument.
function a(parameter){
    console.log("amy")
}
a(argument)

//First Class Function
->The ability of the function to be used as values and can be passed this as an argument to another funtion and can be 
returned as an output from a function this ability is known as first class function in JS,

In JavaScript:

Functions are treated as first-class citizens.
This means:
Functions can be assigned to variables.
Functions can be passed as arguments to other functions.
Functions can be returned from other functions.
This ability is collectively referred to as First-Class Functions.


//First Order Function 
A functiin that takes one or more function as argument and return a function as output