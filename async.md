What is async function?
- Each time when an async function is called,it always return a promise

-Ans if don't return a function , if you return a value that is non promise value  then it will wrap inside a promise and will return a promise
ex-
async function getData(){
    return "Namaste";
}
const data=getData();
console.log(data)

2. Async and await combo is used to handle promise

3. How to handle promise using async await

# const p=new Promise((resolve,reject)=>{
    resolve("Promise resolved")
})

async function handlePromise(){
    const val=await p;
}
# what is await ? 
# await is the keyword that can only be used inside your async function and this wait is written in front of promise

# older way 
//older way resolving the promise
const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise value resolved")
    },10000)
});

function getData(){
    p.then((res)=>{
        console.log(res)
        console.log("Namaste Javascript")
    })
}
getData()

////How fetch works
# Fetch() - fetch function is basically a promise which gives you a response object,
# ans this response object has a body which contains a readable stream , and to convert it to json->
fetch() =>Response.json =>result
and the response.json is again a promise will give a result i:e json value
//fetch() =>Response.json()=>jsonvalue    

const API_URL="xyz.com"

async function handlePromise() {
   const data=await fetch(API_URL)
}
handlePromise( )

# /////////////////////////////////////////////////////////
# what is async await
-> async is the kewyword which can be used as function
->await can only be used inside async function to handle promises
->these promises are asyncronous