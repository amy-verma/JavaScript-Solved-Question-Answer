console.log("Namaste JavaScript")

setTimeout(function(){
    console.log("javascript")

},5000)




// While using callback we face 2 issues which are as follows:
// 1. Callback Hell : When more than 1 APIs depend on each other to get call so then we pass the callback function inside 
// callback function so it created nested callback function this makes our code less maintainable and readable this is
//  callback hell. It also know as "Pyramid of Doom".

// 2. Inversion of Control:  When we pass a callback function into another function then the execution of callback 
// function is depend on that function so in this way we loose the control over our code this is know as Inversion of 
// Control. 

