document.getElementById("addButton").addEventListener("touchend",addTodo);
document.getElementById("todoList").addEventListener("touchend",checking);

const listElements = document.getElementById("todoList");

let todoList = [];
if (localStorage.getItem('todos')) {
    todoList = JSON.parse(localStorage.getItem('todos'))
  } else {
    todoList = []
  }


function checking(e) {
    let id = e.target.children[0].id;
    e.target.classList.toggle("checked");
    console.log(todoList);
    console.log(e.target.id);
    for(i = 0;i < todoList.length; i++)
    {
        if (id == todoList[i].id){
           if (todoList[i].completed = true)
           {
               todoList[i].completed = false;
           }else{
               todoList[i].completed = true;
           }
           
        }

    }
    saveToLocal();
}

function deleteItem(e){
    let id = e.target.id;
    console.log(todoList);
    let x = todoList.indexOf(id);
    console.log(id);
    for(i = 0;i < todoList.length; i++)
    {
        if (id == todoList[i].id){
            todoList.splice(i ,1);
        }
    }
    refreslist();
    saveToLocal();
}




function saveToLocal(list){
    localStorage.setItem('todos', JSON.stringify(todoList))
}




function todoListBuild(todos) {
    const item = document.createElement('li');
    if (todos.completed == true ){
        item.className = "checked";  
    }
    item.innerHTML = `<div class="card">
    <div class="card-body">
    ${todos.content} 
    <button type="button" class="btn btn-secondary float-right" id="${todos.id}">X</button>
    </div>
  </div>
  `
    
  
    return item;
}




function addTodo(){
    const input = document.getElementById("addtolist").value
    const todo = {id: new Date(), content: input, completed: false}
    todoList.push(todo);
    localStorage.setItem('todos', JSON.stringify(todoList))
    console.log(todoList)

    saveToLocal(todoList);
    refreslist();
}

function refreslist(){
    listElements.innerHTML = '';
    for(i = 0;i < todoList.length; i++)
    {
        listElements.appendChild(todoListBuild(todoList[i]));
        document.getElementById(todoList[i].id).addEventListener("touchend",deleteItem);
    }
    
}
refreslist();



