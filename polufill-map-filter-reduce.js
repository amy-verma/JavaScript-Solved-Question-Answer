// let arr = [2, 3, 4];
// let res = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log(res);

Array.prototype.myArray = function (callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = callback.call(undefined, accumulator, this[i], this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};
let arr = [1, 3, 4, 5];
console.log(arr.myArray((acc, curr) => acc + curr));
