Question. Why Choose TypeScript over JavaScript?
1. Type Safety = Fewer Bugs
- TypeScript catches errors at compile time, before they ever run in the browser.
- You get real-time warnings if you misuse types, like passing a string to a function expecting a number.
function greet(name: string) {
  console.log(`Hello, ${name}`);
}

greet(123); // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'

 3. Refactoring Is Safer
 - In large JS apps, changing variable or function names can easily break things.
 
 4.  Supports Modern Features + Transpilation
 - TypeScript allows you to use next-gen JS features even if your target environment doesn’t support them yet.

When TypeScript is a clear win
- Medium to large codebases
- Long-lived apps
- Multiple developers
- Complex data models or APIs
- You want robust CI/testing/dev workflows

