function addtodo(){
    var input = document.getElementById("inputField");
    var liElement =document.createElement("li")
    var liText = document.createTextNode(input.value);
    liElement.appendChild(liText);
    // ****************Delete Button *************
    var delbtn = document.createElement("button");
    var delbtnText = document.createTextNode("Delete");
    delbtn.appendChild(delbtnText);
    liElement.appendChild(delbtn);
    delbtn.setAttribute("onclick","deleteItems(this)");
    delbtn.setAttribute("class","button");
    // *****************Edit button**************
    var editbtn = document.createElement("button");
    var editbtnText = document.createTextNode("Edit");
    editbtn.appendChild(editbtnText);
    liElement.appendChild(editbtn);
    editbtn.setAttribute("onclick","editItems(this)");
    editbtn.setAttribute("class","button");
    
    
    
    var list = document.getElementById("list");
    list.appendChild(liElement);
    console.log(liElement);
    input.value = "";
}
function deleteAll(){
    var list = document.getElementById("list");
   list.innerHTML= ""; 
}

function deleteItems(x){
    x.parentNode.remove();
}
function editItems(e){
    var input = prompt("Enter updated value...");
    e.parentNode.firstChild.nodeValue = input;
}