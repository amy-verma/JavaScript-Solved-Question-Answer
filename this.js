//this in global space
console.log(this)   // refer to a global object - window,global

//this inside a function 
function a(){
    console.log(this)  //here the value depends on strict/non-strict mode   
}                       
a() 
//without strict mode value will be window object
//"strict mode"--value will be undefined
//this keyword inside strict mode is usdefined due to phenomenon -(this substitution)

//if the value of this keyword is undefined or null  this keyword will be replaced with global object only
// in non-strict mode


//this keyword value depends on how the function is called (window)
in strict mode

x();  //if the function is called without any reference of an object - undefined
window.x();  //window

in non-strict mode (this substitution happens)


//this inside a object's 
Q. Diff btw function & method.
If you will make a function as a part of an object then it is known as method

const obj={
    a:10,
    x:function(){   //here x is a method of an object obj
    console.log(this)  //
    }
}
obj.x()// so whenever you are in method the value of this this keyword is the object where this method is present
       //{a:10,x:f}

//Call Apply and Bind method (sharing method)
// ->these method are used when you have to share methods
// -> if you want to share this function x with another object then there is a way you can
//   do it using call apply and bind method.
// ->here value of this can be modified using call appy and bind method all these three are used to set the value of this method

const student={
    name:"Amit",
    printname:function (){ //student have the method //inside this function i am trying to overwritee the value of this 
        console.log(this.name)  //the value of this keyboard will be object 
    }
}
student.printname()

const student2={
    name:"Sumit"
}
student.printname.call(student2)

//this inside arrow function
//here the arrow function don't provide their own this binding(it retains the this value fo the enclosing lexical context)
const obj={   //i:e enclosing  lexical context
    a:"amy",
    x:()=>{
        console.log(this)
    }
}
obj.x() //the value will be window object i:e it will take the value of global object i:e enclosing lexical context

//inside nested arrow function
const  obj2={
    a:10,
    x:function (){
        const y=()=>{ //here the arrow function is enclosed inside another function which is the method of this object
            console.log(this) //i:e enclosing  lexical context - use this keyword
        }; //here this keyword will exactly behave as if they were  inside enclosed the lixical context 
        y()
    }
}
obj2.x()


//this inside DOM Elements =.refer to the perticular DOM element
 
<button onclick='alert(this.tagname)'>click me</button>//will show the button itself

//this inside class and constructor