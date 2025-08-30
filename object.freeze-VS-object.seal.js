// | **Feature**             | **`Object.freeze()`**                                                              | **`Object.seal()`**                                                      |
// | ----------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
// | **Properties Writable** | All properties become **read-only**. You cannot modify, add, or delete properties. | Properties can be **writable**, but you cannot add or delete properties. |
// | **New Properties**      | You cannot add new properties to the object.                                       | You cannot add new properties to the object.                             |
// | **Delete Properties**   | You cannot delete existing properties.                                             | You cannot delete existing properties.                                   |
// | **Prototype Changes**   | The prototype cannot be changed.                                                   | The prototype can still be changed.                                      |


const obj = {
  name: "John",
  age: 30
};

Object.freeze(obj);

obj.name = "Jane";  // This will not work, as the object is frozen.
obj.address = "123 Street";  // This will not work, as you cannot add properties.
delete obj.age;  // This will not work, as you cannot delete properties.

console.log(obj);  // { name: "John", age: 30 }
