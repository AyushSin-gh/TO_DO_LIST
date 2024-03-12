//const inputbox=document.getElementById("inputbox");
const listcontainer=document.getElementById("list-container");
const inptbox= document.querySelector('inputbox');
inputbox.addEventListener('keyup', (e) =>{
  if(e.keycode=== 13){
    let li = document.createElement("li");
    li.innerHTML=inputbox.value;
    listcontainer.append(li);
    let span= document.createElement("span");
    span.innerHTML="\u00d7";  // cross icon code u00d7
    li.appendChild(span);
  }
})
function addtask(){
    if(inputbox.value === ''){
        alert("write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.append(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";  // cross icon code u00d7
        li.appendChild(span);
    }
    inputbox.value=""; // after writing value place holder value replaces 
   saveData();
}

listcontainer.addEventListener("click",function(e){
      if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
         saveData();
      }
      else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
       saveData();
      }
},false);


   function saveData(){
      localStorage.setItem("data",listcontainer.innerHTML);
 }

   function showTask(){
    listcontainer.innerHTML= localStorage.getItem("data");
   }
  showTask();


