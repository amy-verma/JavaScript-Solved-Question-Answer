Event Object-

1. It is the special object that has detail about the event
2. All event handler have access to the event object's properties and method

3. An event is an action a user or system may trigger, such as pressing a key or clicking a mouse.

e.target,e.type....
btn.onclick=(e)=>{
console.log(e)
}

                Event Listners

1.  btn1.addEventListner("click",()=>{
    clg("btn clicked)
    })
