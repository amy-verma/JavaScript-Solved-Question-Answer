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
//             const data=await response.json
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