// What are props 
// 1. Props stand for properties
// 2. Props are used to transfer data from one componenet to another. 
// 3. Props are read only. we cannot change the value of a prop 
// 4. Prop are just like a function in JS
//5. They make React components dynamic and reusable.


import React from "react";
import Counter from "./Counter";

// const App = () => {   //parent component
//     return (
//         <div>
//             <Counter name="Amit"/>
//             <Counter name="Sumit"/>
//         </div>
//     );
// };
// export default App;
// ------------------------------------------

const Counter=(props)=>{   //Child componenet
    return (
        <div>
            <h1>Hello {props.name}</h1>
            {/* <h1>Hello {props.name}</h1> */}
        </div>
    )
}
export default Counter;

// OOOOORRRRRRRRRRRR

// const Counter=({name})=>{
//     return (
//         <div>
//             <h1>Hello {name}</h1>  //we can do destructuring also
//             {/* <h1>Hello {props.name}</h1> */}
//         </div>
//     )
// }
// export default Counter;