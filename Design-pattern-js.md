Common JavaScript Design Patterns:

1. Module Pattern
   -Encaptulates private data using closures

const Counter = (function () {
let count = 0;

return {
increment() {
count++;
console.log(count);
},
reset() {
count = 0;
}
};
})();

Counter.increment(); // 1
Counter.increment(); // 2

2. factory Pattern

- Creates objects without exposing the instantiation logic.

3.  Singleton Pattern

- Ensures a class has only one instance.

4.  Prototype Pattern

- Allows sharing methods via prototypes to save memory.
