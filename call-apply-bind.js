const name={
    firstname:"Amit",
    lastname:"Verma",
    printFullname: function(){
        console.log(this.firstname+" "+this.lastname)
}
}
name.printFullname()

const name2={
    firstname:"Sumit",
    lastname:"Verma"
}

//using call method we can do function borrowing
//we can borrow functions of other objects and use it with the data of some other objects
//in call method we call the arguments individually i:e comma seperated

name.printFullname.call(name2)

 let printFullname= function(hometown,state){
    console.log(this.firstname+" "+this.lastname+"From"+hometown+","+state)
}

printFullname.call(name2,"Jamshedpur","Jharkhand")

/////////////////////////////////////////////
//the only difference between call and apply method is the way we pass the argument
//the first arguments is the refrence to this variable and second arguments is list to the arguments what we have to  in the function
//we pass second element inside array list
let printFullnamee= function(hometown,state){
    console.log(this.firstname+" "+this.lastname+"From"+hometown+","+state)
}

printFullnamee.apply(name2,["Jamshedpur","Jharkhand"])

//bind method
//instead directely calling it bind method binds the method printfull name with a object and return us the copy of 
//that method
//it actually return a method that can be called later


let printmyName=printFullname.bind(name2,["Jamshedpur","Jharkhand"])
console.log(printmyName)
printmyName()

//it is basically used to just bind and keep the copy of that method and use it later


Example of BInd method

    <button onClick={
    handleClickAgain.bind(null,'amit')  ///using bind
    }>click me again</button>


const handleClickAgain=(name)=>{
console.log('hello',name)
}

//Interview Question
1. 
const person={
    name:"Amit",
    age:25
}
function printname(){
    return `${this.name} is ${this.age}`
}
console.log(printname.call(person))//Amit is 25

console.log(printname.bind(person))//[Function: bound printname]


2. 
var status="Hi";

setTimeout(()=>{
    const status="Hello"
    
    const data={
        status:"Amit",
        getStatus(){
            return this.status
        }
    }
    console.log(data.getStatus())//Amit
    console.log(data.getStatus.call(this))
},0)

//////////////////////////////////////////////////////

// Q. let age=10;

// let person={
//   name:"Piyush",
//   age:20,
//   getAge:function(){
//     return this.age
//   }
// }

// var person2={age:24}
// console.log(person.getAge.call(person2))//24

/////////////////////////////////////////////////////

// 3. Question 
const animals=[
    {species:"Lion",name:"King"},
    {species:"whale",name:"queen"},
    ];
    
function printAnimals(i){
    this.print=function(){
        console.log("#"+i+" "+this.species+":"+this.name)
    }
    this.print()
}
//Answer
const animals=[
    {species:"Lion",name:"King"},
    {species:"whale",name:"queen"},
    ];
    
function printAnimals(i){
    this.print=function(){
        console.log("#"+i+" "+this.species+":"+this.name)
    }
    this.print()
}
for(let i=0;i<animals.length;i++){
    printAnimals.call(animals[i],i)
}
#0 Lion:King
#1 whale:queen


// 4. Question
// Append an array to another Array 
// const array=["a","b"]
// const elemets=[0,1,2]

// Answer
// const array=["a","b"]
// const elements=[0,1,2]
// array.push.apply(array,elements)
// console.log(array)

// 5. Question 
// Uisng apply to enhance built in function
// Answer
// const numbers=[43,7,3,8,3,8]
// console.log(Math.max.apply(null,numbers))

// 6.  const age=10;
 
// var person ={
//     name:"Piyush",
//     age:20,
//     getArrow:()=>console.log(this),
//     getAge:function(){
//         console.log(this.age)
//     },
// };
// var person2={age:30};

// person.getArrow.call(person2)//undefined
// person.getAge.call(person2)//30