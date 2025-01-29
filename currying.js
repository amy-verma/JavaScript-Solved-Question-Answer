function add(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}
console.log(add(2)(3)(4))



////////////////////////////////////////////////////////////////////////


const add=a => b => c =>  a+b+c;
console.log(add(1)(2)(3))