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
// Array.reduce((acc,curr,i,arr)=>{},initailValue)

// const num=[1,2,4]
// const res=num.reduce((acc,num,i,arr)=>{
//     return acc+num
// },0)
// console.log(res)


// Polyfill for MAp-------

// Array.prototype.myMap=function(callback){
//   let result=[]
//   for(let i=0;i<this.length;i++){
//     result.push(callback(this[i],i,this))
//   }
//   return result
// }
// let res=arr.myMap((ele)=>{
//   return ele*2
// })
// console.log(res)

// --------------------------------Polyfil- filter--------------

//  let arr=[1,2,4,5,6]
// let mul=arr.map((ele,index,arr)=>{ return ele*2+index})
// // // console.log(mul)
// Array.prototype.myFilter=function(cb){
//   let temp=[];
//   for(let i=0;i<this.length;i++){
//     if(cb(this[i],i,arr)){
//       temp.push(this[i])
//     }
//   }
//   return temp
// }
// let res=arr.myFilter((ele)=>{
//   return ele>3
// })

// console.log(res)

// ------------------------------Reduce - Polyfil----------

//  let arr=[1,2,4,5,6]


// Array.prototype.myReduce=function(cb,initialValue){
//   let accumulator=initialValue;
//   for(let i=0;i<this.length;i++){
//     accumulator=accumulator? (cb(accumulator,this[i],i,this)):this[i]
//   }
//   return accumulator
// }
// const arr=[2,3,4,5]
// let res=arr.myReduce((acc,curr)=>{
//   return acc+curr
// },0)
// console.log(res)



// Question 1. Map vs Foreach 

// const arr=[2,5,6,9]

// const mapResult=arr.map((ele)=>{
//     return ele*2
// }).filter

// const forEachResult=arr.forEach((ele)=>{
//     return ele+2
// })
// console.log(mapResult,forEachResult)
// in for Each to modify the original array


// const forEachResult=arr.forEach((ele,i)=>{
//     arr[i]=ele+3
// })
// console.log(forEachResult,arr)


//map,filter,reduce O/P Based uestion
//Display the only names in upper Case
// let students=[{name:"Piyush",rollnumber:30,marks:80},
// {name:"Jenny",rollnumber:15,marks:69},
// {name:"Kaushal",rollnumber:16,marks:35},
// {name:"Dilpreet",rollnumber:6,marks:55},]

// let names=[]
// for(let i=0;i<students.length;i++){
//   names.push(students[i].name.toUpperCase())
// }
// console.log(names)

// let res=students.map((ele)=>{
//   return ele.name.toUpperCase()
// })
// console.log(res)

// Question 3 Return only the details of those who scored more than 60

// let students=[{name:"Piyush",rollnumber:30,marks:80},
// {name:"Jenny",rollnumber:15,marks:69},
// {name:"Kaushal",rollnumber:16,marks:35},
// {name:"Dilpreet",rollnumber:6,marks:55},]

// let res=students.filter((ele)=>{
//   return ele.marks>60
// })
// console.log(res)

// Question 4. Marks greater then 60 and rollno >15

// let students=[{name:"Piyush",rollnumber:30,marks:80},
// {name:"Jenny",rollnumber:15,marks:69},
// {name:"Kaushal",rollnumber:16,marks:35},
// {name:"Dilpreet",rollnumber:6,marks:55},]

// let res=students.filter((ele)=>{
//   return ele.rollnumber>15 && ele.marks>60
// })
// console.log(res)

// Question 5. 

// Sum of marks of all the students


// let students=[{name:"Piyush",rollnumber:30,marks:80},
// {name:"Jenny",rollnumber:15,marks:69},
// {name:"Kaushal",rollnumber:16,marks:35},
// {name:"Dilpreet",rollnumber:6,marks:55},]

// let res=students.reduce((acc,curr)=>{
//   return acc+curr.marks
// },0)
// // console.log(res)

// Question 5. Return total marks of students with marks greater then 60 after 20 marks have been 
// added to those who scored less the 60

// let students=[{name:"Piyush",rollnumber:30,marks:80},
// {name:"Jenny",rollnumber:15,marks:69},
// {name:"Kaushal",rollnumber:16,marks:35},
// {name:"Dilpreet",rollnumber:6,marks:55},]

// let students=[{name:"Piyush",rollnumber:30,marks:80},
// {name:"Jenny",rollnumber:15,marks:69},
// {name:"Kaushal",rollnumber:16,marks:35},
// {name:"Dilpreet",rollnumber:6,marks:55},
// ]
// let res=students.map((ele)=>{
//  if(ele.marks<60){
//    ele.marks+=20
//  }
//   return ele
// }).reduce((acc,curr)=>{
//   return acc+curr.marks
// },0)
// console.log(res)