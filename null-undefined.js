// undefined-when it allocates memory to all its variable and function to the variables it tries to put a placeholder i:e
//            in the memory that special keyword is undefined 
//            -undefined is like taking memory
            
//            -it is a special keyword takes up its own memory/placeholder which is kept for time being until the variable 
//            is assigned some other value till that point it will store this placeholder i:e undefined 
         
  console.log(a) //undefined
  var a=7       
  
  
  console.log(a)//7

//   not-defined-not allocated any memory

//   Loosely typed language/Weekly Typed Language- it does not attaches it's variables to any specific data type 
//                     example- if created a and put string in it so later on in the program i can also put Number,boolean
//                      in it,it is like js is very flexible in this case.

// Example-

var a;
console.log(a)
a=10;
console.log(a)
a="hello world"
console.log(a)