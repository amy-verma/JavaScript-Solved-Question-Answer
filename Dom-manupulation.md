                   DOM Manupulation-

1. selecting id-
document.getElementById("myId")

2. selecting class name-
document.getElementsByClassName("xyz")

3. selecting with tag name-
 document.getElemnetByTagName("p")

                     Query Selector //return node list

4. document.querySelector("#myId/.myClass/tag") //return first element

5. document.querySelectorAll("")//return all matching elemet

QUESTION 1
Create h2 heading elements with text 'Hello js' append from "apna college students" to this text

step 1 select the h2 tag

let H2=document.query selector("h2");
console.log(h2,.innetText);
h2.innerText=h2.innerText+ "Apna college students";
0/p-hello js from apna college

Question 2
Create 3 div with common classname-"box" ,Access them & add some unique text to each of them

step-1 Access them
-let divs=document.querySelectorAll(".box")
console.log(div[0])//to access individual div
div[0].innerText="new Inner value 0"  //change firt div value
div[1].innerText="new value of div 1"
div[2].innerText="new value of div 2"


                          Attributes--
1. getAttributes(attr)       //class,id are attributes                    

let div=div.getAttribute("id)
console.log(div)

2. setAttribute  //set the attribute value or change

let div=div.setAttribute("p')
console.log(old class name,new class name)

3. style //to changle style of a node

let div=document.querySelector("p");
p.style.backgroundColor="red" 
div.style.fontSize="26px"
div.innerText="chnaged text"


                                INSERT ELEMENTS
1. node.append(el)//add at the end of the node(inside)
2. node.preappend(el)//adds at the start of the node{inside}
3. node.before(el)//add before the node(outside)
4. node.after(el)//add after the node(outside)                                
1. it is two step process-
    first create a element
    second add the elemenet                                

    let newBtn=document.createElement("button); //button created
    newBtn.innerText="clickMe" //to add text

    let div=document.querySelector("div"); now access the div where to add 
    div.append(newBtn) //and append at the end