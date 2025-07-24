// Polyfill for call

let person = {
  firstname: "amit",
  lastname: "verma",
};

function printfullname(age) {
  console.log(this.firstname + " " + this.lastname + " " + "is" + " " + age);
}
// printfullname.call(person,28)

Function.prototype.myObject = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "not callable");
  }
  context.fn = this;
  context.fn(...args);
};
printfullname.myObject(person, 28);

// ---------------------Polyfill for Apply--------------

let name = {
  firstname: "amit",
  lastname: "verma",
};
let printfullname = function (age) {
  console.log(this.firstname + " " + this.lastname + " " + age);
};
// printfullname.call(name)

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this, "is not a function");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("not an array");
  }
  context.fn = this;
  context.fn(...args);
};

printfullname.myApply(name, [28]);

// ---------------------------Polyfil for Bind----------------------

let name = {
  firstname: "amit",
  lastname: "verma",
};
let printfullname = function (age) {
  console.log(this.firstname + " " + this.lastname + " " + age);
};
// printfullname.call(name)

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this, "is not a function");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("not an array");
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newFunc = printfullname.myBind(name, "age");

console.log(newFunc(28));
