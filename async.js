// async function getData(){
//     return "Namaste";
// }
// const data=getData();
// console.log(data)

const { reject } = require("async");
////////////////////////////////////////////////////////////////////
// 3. How to handle promise using async await

 const p=new Promise((resolve,reject)=>{
    resolve("Promise resolved")
})

async function handlePromise(){
    const val=await p; //use keyword await in front of promise that needs to be resolved
    console.log(val)
}
handlePromise()

////////////////////////////////////////////////////////////

//older way resolving the promise
const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise value resolved")
    },10000)
});

function getData(){
    //JS enginer will not wait for promise to be resolved
    p.then((res)=>{
        console.log(res)
        console.log("Namaste Javascript")
    })
}
getData()
///////////////////////////////////////////////////////////////////////////

const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved p1")
    },5000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved p2")
    },1000)
})
async function consumePromise(){
    console.log("Helloooo")
    const res=await p;
    console.log(res)
    console.log("Hello from p1 ")
    
    
     const re=await p2;
    console.log(re)
    console.log("Hello from p2")
    
}
consumePromise()


/////////////////////////////////////////////////////////////////////
//newer way of resolving the promise


const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise value resolved")
    },10000)
});

async function handlePromise() {
    //here js engine was waiting for promise to get rsolved
    const val =await p;
    console.log("Namaste Javascript")
    console.log(val)
}

///////////////////////////////////////

//fetch returns a response object


////How fetch works
# Fetch() - fetch function is basically a promise which gives you a response object,
# and this response object has a body which contains a readable stream , and to convert it to json->
fetch() =>Response.json =>result
and the response.json is again a promise will give a result i:e json value

//fetch() =>Response.json()=>jsonvalue    

const API_URL="xyz.com"

async function handlePromise() {

    try{
        const data=await fetch(API_URL);
    const jsonValue=await data.json()
    console.log(jsonValue)

    }
    catch(err){
        console.log(err)

    }
    
}
handlePromise( )