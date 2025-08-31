// | Feature       | **Spread Operator (`...`)**           | **Rest Operator (`...`)**                       |
// | ------------- | ------------------------------------- | ----------------------------------------------- |
// | **Purpose**   | Expands (spreads) values              | Collects (gathers) values                       |
// | **Used in**   | Function calls, array/object literals | Function parameters, array/object destructuring |
// | **Direction** | **Unpacks** into individual elements  | **Packs** multiple elements into one            |


// 🔍 Spread Operator – "Expand things out"

// ✅ In Arrays

// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4]; // spreads arr1
// console.log(arr2); // [1, 2, 3, 4]

// ✅ In Objects
// const user = { name: "Amit" };
// const updatedUser = { ...user, age: 25 };


// 🧳 Rest Operator – "Collect things into one" 

// ✅ In Array Destructuring       
// const [first, ...rest] = [10, 20, 30, 40];
// console.log(first); // 10
// console.log(rest);  // [20, 30, 40]

// ✅ In Object Destructuring
// const { name, ...rest } = { name: "Amit", age: 25, city: "Delhi" };
// console.log(name); // "Amit"
// console.log(rest); // { age: 25, city: "Delhi" }

