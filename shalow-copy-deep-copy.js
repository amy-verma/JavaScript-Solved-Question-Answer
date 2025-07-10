const originalObj={
    name:"amit",
    address:{
        city:"Jsr"
    }
}
// const shallowCopy={...originalObj}
// console.log(shallowCopy)
// const shallowCopy=Object.assign({},originalObj)
// console.log(shallowCopy)

originalObj.address.city="Blr"
// console.log(shallow)//name changed in shallow copy//Blr

let deepCopy=JSON.parse(JSON.stringify(originalObj))
// console.log(deepCopy)
// deepCopy.address.city
console.log(deepCopy)//jsr











// let obj={
//     name:"peter"
// }
// console.log(obj)
// let user=obj
// user.name="amu"
// console.log(obj)//amu     //in js when we assign one object to another it's data is not copies it's reference/memory location
                 // is copied


//  Example using a variable
 //when we assign a variable to another then it's value is copied not it's reference
//  let x="anil";
//  let y=x;
//   y="sumit"
//  console.log(x)//anil


 //Shalow copy
//  using this u can copy value 

//  let obj={
//     name:"amit"
//  }
//  let user=Object.assign({},obj); //using shalow copy concept 1
// let user={...obj}  //2nd concept using shalo copy 
//  user.name="sumit"
//  console.log(obj)//amit


 //Deep Copy
// let obj={
//     name:"amy",
//     address:{
//         city:"gurgaon",
//         state:"up"
//     }
    
// }
// let user={...obj};
// user.address.state="Jharkhand"
// console.log(obj)//{ name: 'amy', address: { city: 'gurgaon', state: 'Jharkhand' } }

// here the output is coming diiferent due to shalow copy nested object to avoid we have to do deep copy

// To do deep copy first we convert the object to string then convert back again

// let obj={
//     name:"amy",
//     address:{
//         city:"jsr",
//         state:"JH",
//     }
// }
// let user=JSON.parse(JSON.stringify(obj)) //deep copy upto 2nd level
// user.address.city="Bangalore"
// console.log(obj)

// Limitation -Deep cpy

let obj={
    name:"amy",
    address:{
        city:"jsr",
        state:"JH",
    },
    getData:function(){   //not work when there is a function or data
        return "All data"
    }
}
let user=_.cloneDeep(obj) //use of loadash
user.address.city="Bangalore"
console.log(obj)

Type of question
1. when we copy an object then it's value is copied or memory location
=> Memory Location

2. Diff btw shalow copy and deep copy
=> inside shalow copy just main object is copied but inside deep copy nested object is also copied
=> values are copied inside both

shalow copy can be copied in two ways-
1. using {...obj}  //known as object destructring
2. using obj.assign({},obj)

DEEP copy
1. USING JSON.parse with JSON.stringify -but inside data and function will not work

2. to resolve data and function you can use loadash library 
3. manualy u can also resolve using for loop inside that copy key to first object the second object





console.log(add(3,4));   // Outputs 7
console.log(add(3)(4));  // Outputs 7

function add(x){
   return function(y){
   return x+y
}
}
console.log(add(3,4));   // Outputs 7
console.log(add(3)(4));  // Outputs 7



function add(x,y){
  return function()
     return x+y

}
 console.log(add(3,4));   // Outputs 7
console.log(add(3)(4));  // Outputs 7