// Q . What is Event Delegation?
// - is a technique where single event listner is attached to a perent elment and it handles events from 
// its child elements.
// - This works because of event bubbling-when an event happens on a child, it bubbles up through its ancestors
// - Instead of adding event listners to every child element you delegate  handling to their common parent



// const App=()=>{
//     const handleOnclick=(e)=>{
//         if (e.target.tagName==="BUTTON"){
//             alert(`You clicked: ${e.target.textContent}`);
//         }
//     };
//     return (
//         <div onClick={handleOnclick}>
//             <button>One </button>
//             <button>Two </button>
//             <button>Three </button>
//         </div>
//     )
// }
// export default App;




// -If i am clicking on this laptop  the event is bubbling up the hierarchy and it is going on to the
// event listner attched to this category  or its parent so we can use this event listner to check
// which li item is clicked i:else(check using e method) and event delegation can be achieved throgh event bubling

// 1. Saves the memory
// 2. maintains the risk of performance
// 3. Writting less code.
// 4. DOM Manupulation

// Limitations
// 1. All the events are not bubbled up 
// a. Blurr, focussed ,resizing of the window,scrolling because they have their own risk

// Bubled up are 
// a. Click,keyUp

// 1. To let the event propagation work you need to not use event propagation and let the 
// events bubble up