var list = document.getElementById("list")

function Addtodo(){
    var Add_Items = document.getElementById("todo-item");
    // create li tag with text node
    var li = document.createElement('li');
    var liText = document.createTextNode(Add_Items.value);
    li.appendChild(liText);

    // create delete button

    var delBtn = document.createElement('button')
    var delText = document.createTextNode('DELETE')
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)


    // edit button

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class","btn")
    editBtn.setAttribute("onclick","editItem(this)")
   
    li.appendChild(delBtn)
    li.appendChild(editBtn)

    
    list.appendChild(li);
    Add_Items.value = ""

}

function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue
    var edit = prompt("EDIT ITEMS",val)
    
    e.parentNode.firstChild.nodeValue = edit
    // console.log(e.parentNode.childNodes[0])

}

function deleteAll(){
    list.innerHTML = ""
}








