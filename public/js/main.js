const deleteBtn = document.querySelectorAll("delete-todo");
const todoIncomplete = document.querySelectorAll("incomplete");
const todoComplete = document.querySelectorAll("complete");

Array.from(deleteBtn).forEach((e) =>{
    e.addEventListener("click", deleteToDo)
});

async function deleteToDo() {
    const todoId = this.parentNode.dataset.todoId;
    
}