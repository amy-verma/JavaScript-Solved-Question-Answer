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
