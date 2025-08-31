🧠 JavaScript Execution Model
- JS runs in a single-threaded environment,means it can only do one thing at a time.To manage
 this is uses.

 1. call stack-for managing function calls
 2. Task queue(or callback queue)- for scheduling async task
 3. Microtask queue- Promise based task
 4. Event loop- ro cordinate all

 📚 1. Call Stack
 - A stack DS that keeps track of the function currently being executed 

 How it works:
 - When a function is called it's pushed onto the stack
 - When is returns , it's popped of the stack

 📦 2. Task Queue (a.k.a. Callback Queue / Macro-task Queue) 

 What it is:

 A queue that holds callbacks from asyncronous Api like

 1. Setinterval
 2. setTimeout
 3. DOM Events
 4. fetch

 When does it run?
 - when the callback is empty
 - Managed by event loop

 🔬 3. Microtask Queue

 A special queue for:
 Promises (.then, .catch, .finally)

 Microtasks run before the task queue but after the call stack is empty.

 🔄 4. Event Loop
 The event loop is what enables non-blocking async behavior in JavaScript.
 Its job:
 1.  Look at the call stack. If it’s not empty → wait.
 2. If stack is empty:
   - Run all microtasks (from microtask queue).
   - Then run the next task from the task queue (macro-task).