Promise APIs

1. Promise.all
Ex- When u want to create parallel api calls and get the results
   like there are 10 user id and you have a api calls for user info and   create
    parallel api calls and get the results
- Handle mutiple api calls togeteher

- Here promise.all will take an array of promises as input

Promise.all([p1,p2,p3]) - 3 promises - will make 3 parallel api calls and get the 
            3s  1s 2s-to get resolved and all of them get succesed 

-In the succesed case the ouput of promise will be an array with the result of all these
three promise 

     Output- 
     After 3s [val1, val2,val3] 
why 3s? because promise.all will make all these three api calls in parallel but it 
will wait for all of them to finish  


NOW if any of the promise Fails-then promise.all will work differently

Promise.all([p1 , p2,   p3])  -when 1 of them gets rejected     
            3s 1s(rej)  2s

- As soon as any of the promise gets rejected it throws an error and whatever the error will be 
it will thrown as result

              Output
    As soon as the error happened  (Error)

- If after 2s error will come then after 2s it will be rejected    
- In this case p2 takes 1s and after 1s error will be thrown

- Not even wait for other promise to get succesful or rejected

THREFORE Promise.all is kind of all or none
-FAIL FAST- if one fails gives the result



2. Promise.allSettled -return an object

Promise.allSettled([p1, p2, p3])-when all get successed
                    3s  1s  2s

                    Output
        After 3s[val1, val2 val3] output for success case


P.allSettled([p1, p2, p3])- p2 gets rejected
             3s 1s(r) 2s-if p2 gets rejected then it will wait for all promise to get settled
              
             Output
After 3s[val1,error,val3]

-THEREFORE- It wait for all then gives the result


3. Promise.race -the first settled promise
 
Promise.race([p1 , p2, p3]) -anyone will winns first will be the winner
              3s   1s  2s

              Output
 After 1s (val2 )is the winner
 - Bsically it will give the value of first settled promise 
 - After 1s whatever the result p2 have, it will give you that value

 Promise.race([p1 , p2, p3])
                5s  2s  3s


                Output
 After 2s val2 will be the winner    
 
 Promise.race([p1 , p2, p3])
               3s  5s   2s(rejected)

               Output 
   after 2s error will be thrown
   
-THEREFORE WILL return result of first settled promise
-Will not wait for other promise to get settled

4. Promise.any -seking for first settled success    

Promise.any([p1, p2 ,p3]) -will wait for first promise to get succesful
             3s  1s   2s

             Output
             val2 

Promise.any([p1, p2 ,p3])            
            3s  1s(r)  2s

            Output 
 Then also it will wait for success    
 
 Promise.any([p1, p2 ,p3])      -two of them gets rejeted       
            3s  1s(r)  2s(r)

            Output 
 Again wait for success  


 Promise.any([p1, p2 ,p3])      -two of them gets rejeted       
            3s  1s(r)  2s(r)

            Output 
  return val1  

  
 Promise.any([p1, p2 ,p3])  if all of them failed      
 3s(r)  1s(r)  2s(r)

 Output 
 [erro1,erro2,error3]

If all of them fails then return Agggregate error : all the promise were rejected
error of detailed reason

////////////////////////////////////

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P1 Success")
    },3000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("P2 reject")
    },1000)
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P2 Success")
    },2000)
})
Promise.all([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
})


///////////////////////////////////////////////////////


const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P1 Success")
    },3000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("P2 reject")
    },1000)
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P2 Success")
    },2000)
})
Promise.allSettled([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
})



////////////////////////////////////////////////


const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("P1 Success")
    },3000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P2 resolve")
    },5000)
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P2 Success")
    },2000)
})
Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
})


///////////////////////////////////////////////////////////////////
->using err.errors will give error in a form of a list
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("P1 Success")
    },3000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("P2 resolve")
    },5000)
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("P2 Success")
    },2000)
})
Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
    console.log(err.errors)
})