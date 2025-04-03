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