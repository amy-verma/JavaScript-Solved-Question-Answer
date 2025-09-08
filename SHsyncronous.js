                         Syncronous 
Syncronous means the code runs in s perticular sequence  of instruction given in  the program.
Each instruction waits for the previous instruction to complete the execution


console.log("First this will be executed")
console.log("Second this will be executed")//will wait for first to get completed 
console.log("Third this will be executed")//will wait for third to get completed
//in that sequence only it will be executed in which it is told


                         Asyncronous 


Due to Syncronous programming,sometimes imp instruction gets blocked due to some previous instruction,
which causes a delay in UI.Asyncronous code allows to execute next instruction immediately & does'nt block the flow

example


console.log("First this will be executed")
console.log("Second this will be executed")//will wait for first to get completed 

setTimeout(()=>{
    console.log("Third")
},2000)

console.log("Fourth this will be executed")
console.log("fifth this will be executed")//will wait for first to get completed 
   
                            CALLBACK

const hello()=>{
    console.log("hello");
    
}     
setTimeout(hello,3000)//here hello is a callback function


CALLBACK HELL example

function getData(dataId){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData()
        }
    },2000)
}
getData(1,()=>{  //1 after 2 sec
    getData(2,()=>{ //2 after 2 sec
        getData(3,()=>{ ///3 after 2 sec
            getData(4) //4 after 2 sec
            
        })
    })
})


//                                 fetch API

// The fetch API provides an interface for fetching(sending/recieving) resources.

// It uses request and response object

// the fetch() method is used to fetch a resource(data)