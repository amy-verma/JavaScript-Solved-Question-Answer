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