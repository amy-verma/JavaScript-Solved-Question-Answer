                              CLASS in JS 

class is a program code template for creating object
 Those obbject will have same state(variable) & bahaviour(function) inside it


 class myClass{
    constructor(){...}

    myMethod(){...}
 }
 let myObj=new MyClass()


 example-
 
 class ToyotaCar(){
    start(){
        console.log("start");
        
    }

    stop(){
        console.log("stop");
        
    }
 }
 let fortuner=new ToyotaCar()  //new car //will have same      //here constructor will be invoked
 let Nexus=new ToyotaCar()  //NEW object

 ////////////////////CONSTRUCTOR////////////////////////////////

 Contructor method is automatically invoked by-
 1. new KEYWORD  //whenever we create a class
 2. initailizes object


 ////////////////////////////////INHERITANCE//////////////////////////////////

 1. Inheritance is passing down properties and method from parent to child
     
                             SYNTAX
 class parent{

 }
 class Child extends parent{

 }

                    EXAMPLE 1

class parent{

}
class Child extends parent{}

let obj =new  Child()//inheritance is working

                     EXAMPLE 2

class Person{
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
        
    }
    work{
        console.log("do nothing")
    }
}

class Engineer extends Person{ //will inherit all the properties of Person
work(){
    console.log("solve problem ,build something")//when parent class & child class has same function then child class fntn will be invoked
}
}

let amit=new Engineer()  //amit.eat   o/p-eat
                          //amit.work() 0/p -solve problem ,build something

                          Method Overriding
//If child  & parent have same method child method will be used known as Method Overriding


///////////////////////////SUPER KEYWORD/////////////////////////////////////////////////////////////

The super keyword is used to call  the constructor of its parent class to access the parent's properties & method

super(args)//calls parent's constructor 

super.parentMthod(args)

Example--

class Person{
    constructor(){
        console.log("enter parent constructor");
        this.species="homo sapien"
        
    }
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
        
    }
    work{
        console.log("do nothing")
    }
}

class Engineer extends Person{ 
    constructor(branch){
        console.log(branch);
        console.log("Enter child constructoe");
        super(); // to invoke parent class constructor //is important to call first constructor using super keyword
        this.branch =branch;
        console.log("Exit child constructoe");

        
        
    }
    work(){
        console.log("solve problem ,build something")//
    }
}
let engObj=new Engineer("chemical engg")

o/p-Enter child constructor
        enter parent constructor
        Exit child constructoe