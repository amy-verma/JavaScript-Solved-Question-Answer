// function x(){
//     var x=1;
//     setTimeout(()=>{
//         console.log(x); //after 1 sec
        
//     },1000)
//     console.log("Namaste"); //print immedeately 
    
// }
// x()

// closure-
// -here the function forms the closure,this function remembers reference to i and forms a closure and wherever the 
// function goes it it takes along the reference of i 

// working of setTimeout
// -it takes the callback function and stores it into some place and attaches a timer of 3ms to it stores somehere and Js
//  proceeds it does not wait for anything it just goes to the next line and print   Namaste Javascriot and once the time 
// expires it takes that function puts it again to the call stack and runs it

// output-1,2,3,4,5,6

// function x(){
//     for(let i=0;i<=6;i++){  //using let variable
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000)
//     }
//     console.log("Namaste Js");
    
// }
// x()


// function x(){
//     for(var i=0;i<=6;i++){   //now using var variable
//         function close(i){
//             setTimeout(()=>{
//                 console.log(i);
                
//             },i*1000)
//         }
//         close(i)
//         }
      
//     console.log("Namaste Js")
// }
// x()
function x(){
    setInterval(()=>{
        console.log('Hello Worls')
    },1000)
}
x()

// --------------------------------------------------------------

let inervalId;
function x(){
    inervalId= setInterval(()=>{
        console.log('Hello Worls')
    },1000)
}

x();

setTimeout(()=>{
    clearInterval(inervalId)
    console.log("timer stopped")
},5000)