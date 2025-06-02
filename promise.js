//Do an async task
//DB calls,cryptography ,network
// The promise is an object which represents the eventual completion or rejection of an asyncronous operation

// Promise is in one of the three StatementSync
// 1. pending-Initial state,neither fulfilled nor rejected
// 2. fulfilled-operation was completed succesfully
// 3. rejected-operation failed


// const promiseOne=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task Complete")
//         resolve()
//     })
// })
// promiseOne.then(()=>{
//     console.log("Promise Comsumed")
// })

///////////////////////////////////////////////////////////////////////////////////
// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task 2 Complete")
//         resolve()
//     })
// }).then(()=>{
//     console.log("Promise 2 consumed")
// })

////////////////////////////////////////////////////////////////////////////////////////
// const promiseThree=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:"amy",email:"xyz.com"})
//     })
// })
// promiseThree.then((user)=>{
//     console.log(user)
// })


//////////////////////////////////////////////////////////////////////////////////////////
// const promiseFour=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false;
//         if(!error){
//             resolve({username:"amit",password:"123"})
//         } else {
//             reject("ERROR: Something went wrong")
//         }
//    
// })
// promiseFour.then((user)=>{
//     return (user.username)
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Error resolved or rejected")
// })
///////////////////////////////////////////////////////////////////////////////////////////////
// const promiseFive=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false;
//         if(!error){
//             resolve({username:"Javascript",pass:"123"})
//         } else {
//             reject("Error: something went wrong")
//         }
//     })
// })

// async function consumePromise(){
//     try{
//         const response=await promiseFive;
//         console.log(response)
//     } catch (error){
//         console.log(error)
//     }
// }
// consumePromise()


////////////////////////////////////////////////////

// async  function getAllUsers(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users');
//             const data=await response.json()
//             console.log(data)
        
//     } catch (error) {
//         console.log("E",error)
//     }
// }
// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})
// ------------------------

setTimeout(() => console.log('setTimeout'),0);

const promise = new Promise((resolve) => {
 console.log('promis executor start');
 resolve('Promise resolved');
});

promise
 .then((result) => {
 console.log(result);
 setTimeout(() => console.log('set Timeout inside Promisse .then'), 0);
 })
 .then (() => console.log('Chained then'));

console.log("End of script");

// -----------------------------------------------------------------------------------
// Possible Interview Questions & Answers:

// 2. Q: What does .then() return?
// A .then() returns a new Promise. It can be used to chain multiple asynchronous operations
// -  Whatever you return from a .then() will be passed to the next .then() in the chain.

// 3. Q: What happens if there's an error in any .then() block?
// If any .then() throws an error or a rejected promise is returned, it will skip all subsequent
// //  .then() blocks and go to the .catch().

// 5. Q: What is the purpose of setTimeout inside the Promise?
// It simulates an asynchronous task, such as an API call. It's commonly used to delay execution 
// or mimic async behavior in demos

// INTERVIEW QUESTIONS (Advanced-Level)
// 1. Q: Is the .then() chain synchronous or asynchronous? How does the JavaScript event loop handle it?
// A. .then() chain is  asyncronous.Even though it looka like a sync then .then() callback are queued
// in the microtask que and they execute after the current statck is empty
// The setTimeout callback is placed in the macrotask queue, so its execution is slightly delayed, then 
// .then() gets scheduled after resolution.

// 3. Q: Can you explain promise chaining and how values are passed between .then() blocks?
// A:
// Yes. In promise chaining:
// Each .then() returns a new Promise.
// The value returned from one .then() is passed as input to the next one.
// If a .then() doesn't return anything, the next .then() gets undefined.

// 5. Q: Is setTimeout inside a promise good practice for real-world async?
// Not really setTimeoutis useful for mocking async behviour during development or interviews.
// -In the real world apps async operatin like  (like fetch or DB queries) should be used.

// 6. Q: How would you handle multiple asynchronous promises if you had more than one?
// 1. Promise.all()         =>waits for all promise to resolve(fail fast if any fail)
// 2. Promise.allSettled()  =>waits for all the promise to get selttled(never fails)
// 3. Promise.race()        =>returns first settled result(resolved or rejected)
// 4. Promise.any()         => Returns first settled(ignore rejection)

// 7. Q: How is error propagation handled in promise chains?
// - If an error is thrown a promise is rejectd,it bubbled down the chain until the first .catch() 
// catch it.If no catch is found it becomes unhandled promise rejection


// Q: Why does .then() return a new Promise?
// - .the() return a new Promise so that you can chain multiple async operation and handle their 
// results or error sequentially

// It gives you full control over what to do next — whether that’s returning a transformed value,
//  waiting for another async task, or handling errors.

// Benefits of .then() returning a new Promise:

// 1. Chaining: You can keep adding .then() blocks one after another.
// 2. Async control: You can return new Promises and wait for them.
// 3. Error handling: One .catch() at the end handles errors from any .then().

