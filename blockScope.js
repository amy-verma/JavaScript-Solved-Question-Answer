// Why do we use block scope
// -When we want a single statement but we use multiple statement inside a block
if (true) {
    //compound statement
    var a = 10;
    console.log(a);
}
// ----------------------------------------------------
let b = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b); //is shadowing i:e it overites
    console.log(c);
}
console.log(b);

//here above this is how scope works
Block: b: 20;//Block scope 
c: 30;

Script: b = 100; //another scope or script scope

Global: a = 10;//global scope
// -------------------------------------------

// 3. Illegal Shadowing
let a=20;
{
    var a=20
}
//4. Good Shadowing

var a=10;
{
    let a=20;
}
//4. Lexical Scope

const a=20
{
    const a=30;
    {
        console.log(a)

    }
}