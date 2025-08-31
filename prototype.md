- In js every object has an internal link to another object called its prototype.
- When you try to access a property on an object,and it is not found, js looka up the chain to its
 prototype-this is called prototype chain.

1. Js has a default behaviour i:e  prototypal behaviour
2.  Due to this behaviour we have this keeyword working.
3. Inside arrow function we dont't have access to this keyword is due to prototype come there.
4. Protype is giving access by "new","classes,"constructor" keyword and "prototypal inheritence"
5. Inside prototype we get methods i:e forEacg,map,pop,push...and then again at last we get prototype i:e call
   inheritence and there we get constructor,toString,valueOf
   First level Prototype is-  Array->Object->null
                            function->object->null
                            string->object->
                            



function multiple(num){
return num*5
}
multiple.power=2

console.log(multiple(5))
console.log(multiple.power) //we can behave function as an object
console.log(multiple.prototype)


//////////////////////////////////////Sharadha---------------------
Prototype In JS
1. A JS Object is an entity having state amd behaviour(properties and method).
2. JS has a special property called prototype
3. We can set prototype using __proto__   //type//address //reference to an object