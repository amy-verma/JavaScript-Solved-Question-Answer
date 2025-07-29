// 1. What is map?
// -a map method is used for creating a new array from existing one by applying a function to each one of 
// the element of thr first aray 

// let arr=[1,2,4]
// let mul=arr.map((ele,index,arr)=>{ return ele*2+index})
// console.log(mul)
/////////////////////////////////////////////////////////////////////
// 2. Filter Method 
// - The filter method takes each element in an array amd it appliesa conditional statement against it. 
// f the conditional returns true the element gets pushed into the o/p array and if false element not gets pushed 
// into output array.Filter only returns those which fullfils the criteria

// const nums=[2,4,5,6]
// const res=nums.filter((ele)=>{
//     return ele>3
// })
// console.log(res)
// ---------------------------------------------------------------------------

// 3. Reduce takes a callBACK function and an initial value 
// and in callBACK we take (acc, curr , i , arr)

// const num=[1,2,4]
// const res=num.reduce((acc,num,i,arr)=>{
//     return acc+num
// },0)
// console.log(res)


// Polyfill for MAp-------

Array.prototype.myMap=function(callback){
  let result=[]
  for(let i=0;i<this.length;i++){
    result.push(callback(this[i],i,this))
  }
  return result
}
let res=arr.myMap((ele)=>{
  return ele*2
})
console.log(res)

// --------------------------------Polyfil- filter

 let arr=[1,2,4,5,6]
// // let mul=arr.map((ele,index,arr)=>{ return ele*2+index})
// // console.log(mul)
Array.prototype.myFilter=function(cb){
  let temp=[];
  for(let i=0;i<this.length;i++){
    if(cb(this[i],i,arr)){
      temp.push(this[i])
    }
  }
  return temp
}
let res=arr.myFilter((ele)=>{
  return ele>3
})

console.log(res)