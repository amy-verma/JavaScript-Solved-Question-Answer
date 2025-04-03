// Memoization
// - Memoization is an optimization technizue that can be used to reduce time-consuming calculation by saving previous input to 
//  something called cache and return the result from it 

// Is an optimization technique that speeds up function execution by storing the results of expensive function calls
//  and returing the cached result when the same input occur again
// --------------------------------------------------------------------------

// How Memoization Works
// 1. Store previous results in a cache (typically an object or Map)
// 2. Before computing a result, check if thr value is already in cache 
// 3. It it is cached, return the stored resukt instaed of recaclculating.
// 4. if not cached compute the result store it and return it



const calc=(n)=>{
    let sum=0
    for(let i=0;i<=n;i++){
        sum +=i
    }
    return sum;
}

const memoize=(fun)=>{
    let cache={};
    return function(...args){
        let n=args[0];
        if(n in cache){
            console.log("cache")
            return cache[n];
        }else{
            let result=fun(n)
            cache[n]=result;//to store in cache
            return result
        }
    }
}
console.time()
const effecient=memoize(calc)
console.log(effecient(5))
 console.timeEnd()