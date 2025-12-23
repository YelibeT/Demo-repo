const todoForm=document.querySelector('form');
const todoInput=document.getElementById('todo-input');
const todoListUL=document.getElementById('todo-list');

let todos=[];
todoForm.addEventListener('submit', function(e){
    e.preventDefault();//so that it doesnt reload
    addToDo();
})
function addToDo(){
    const todoText=todoInput.value.trim();
    if (todoText.length>0) {
        todos.push(todoText);
        updateTodoList();
        todoInput.value="";   
    } 
}
//edit,
function updateTodoList(){
    todoListUL.innerHTML="";
    todos.forEach((todo,todoIndex)=>{
        todoItem=createTodoItem(todo,todoIndex);
        todoListUL.append(todoItem);

    })
}
function createTodoItem(todo, todoIndex){
    const todoID="todo-"+todoIndex;
    const todoLI=document.createElement("li");
    todoLI.classList.add("item");
    todoLI.innerHTML= `
        <input type="checkbox" id="${todoID}">
        <label for="${todoID}" class="custom-checkbox"></label>
        <label for="${todoID}" class="todo-text">
                    ${todo}
        </label>
        <button class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
    `;
    return todoLI;
}
