// Q. What us deboucing?
// - Is a technique used in programming to limit the rate at which function is executed.
// - It is super useful when you are dealing with events that can fire rapidly like scroll,resize,keypress
//  or input.  

// What it does
// It ensure that the function is only called after certain delay, and only if no new event has occured 
// in that delay period

// -------------------------

// Real-life analogy:
// Imagine you're typing in a search box. You don't want to make an API call every keystroke, right? Instead,
//  wait until the user pauses for a moment—say 500ms—and then fire the search. That’s debouncing.

// ---------------------------------------------------
// to stop unwanted function call
// - should be called after some time interval
// - after pressing and after some millisecond it will be called

// - It waits for sometime before running a function
// - if you call the function again before time is up it resets a timer
// - the functiin runs only after there are no more calls for a settime

<input type="text" onkeyup="betterFunction()" />

let counter=0;
const getData=()=>{
    console.log("Fetching data",counter++)
}

function doSomething(fn,d){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer)
           timer= setTimeout(()=>{
                fn.apply(this,args)
        },d);
    }
}


const betterFunction=doSomething(getData,1000)