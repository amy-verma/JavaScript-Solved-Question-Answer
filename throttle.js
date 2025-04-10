// Wgat ius throttling?
// - When an event like (scroll, resize,eventclick) fires very frequently,running a function 
// every single time can be performance heavy. 
// -throtling helps by ensuring that the function is only called once every x millisecond, no matters 
// how many time the event fires.  

// Real-Life Example:
// Imagine you're clicking a button super fast — throttling will ignore extra clicks and only allow one 
// action every, say, 1 second.


<button id="myid" onclick="newFunc()">Hello</button>



const mythrotle=(fn,d)=>{
    return function(...args){
        document.getElementById("myid").disabled=true;
        setTimeout(()=>{
            fn.apply()
        },d)
    }
}



const newFunc=mythrotle(()=>{
    console.log("User clicked")
},1000)