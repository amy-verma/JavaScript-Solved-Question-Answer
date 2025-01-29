var User=function(firstname,courseCount){
    this.firstname=firstname;  //this.firstname-is one of the onther way of defining object i:e function apporoach of def object & recomended way
    this.courseCount=courseCount;
    this.getCouserCount=function(){
        console.log(`Cousre count is: ${this.courseCount}`)
    }
} //this is a kind of prototype
var amit= new User("amit",20)//to create an object/new User then you have to use new keyword not only create oject but do multiple taks
console.log(amit)


var sumit=new User("sumit",22)
console.log(sumit)

// Also advange of new keyword is 
// 1. is responsible for the above Syntax 
// 2. is responsible for invoking the constructor and creating a unique instance every single time no matter how many
//  time it is used.
//   a new copy of the entire object will be created
// 3. it also takes care of this keyword -by moving this keyword from the global object to inside of this object
// 4. here it is not a regular function call this keyword is not going to point towards the window object that is why we are 
//    able to use this coz it is pointing inside the object