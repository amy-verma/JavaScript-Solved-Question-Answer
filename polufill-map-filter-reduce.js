// Polyfil for filter

// let arr = [2, 3, 4];
// let res = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log(res);

// Array.prototype.myArray = function (callback, initialValue) {
//   let accumulator = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     if (accumulator) {
//       accumulator = callback.call(undefined, accumulator, this[i], this);
//     } else {
//       accumulator = this[i];
//     }
//   }
//   return accumulator;
// };
// let arr = [1, 3, 4, 5];
// console.log(arr.myArray((acc, curr) => acc + curr));

//////////////map - Polyfil////////////////////////////////////////////

// const arr=[2,3,4]
// const res=arr.map((ele)=>ele*2)
// console.log(res)

// Array.prototype.myArray = function (callback) {
//   let result = [];
//   if (typeof myArray === "function") {
//     throw Error(`${callback} is not an array`);
//   }
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }
//   return result;
// };
// let arr = [2, 3, 4];
// console.log(arr.myArray((ele) => ele * 2));

/////////////////////filter-polyfil///////////////////////

// const res=[2,3,4,5]
// const arr=res.filter((ele)=>ele>3)
// console.log(arr)

// Array.prototype.myFilter=function(cb){
//   let result=[];
//   for(let i=0;i<this.length;i++){
//     if(cb(this[i],i,this)){
//       result.push(this[i])
//     }
//   }
//   return result
// }

// let arr=[2,3,4,5,3];
// let res=arr.myFilter((ele)=>{
//   return ele>3
// })
// console.log(res)
