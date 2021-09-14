const deleteBtn = document.querySelectorAll(".delete-todo");
const todoIncomplete = document.querySelectorAll(".incomplete");
const todoComplete = document.querySelectorAll(".complete");

Array.from(deleteBtn).forEach((e) => {
  e.addEventListener("click", deleteToDo);
});

async function deleteToDo() {
  console.log("delete working!");
    const todoId = this.parentNode.dataset.todoId;
    try {
      const response = await fetch("todos/deleteTodo", {
        method: "delete",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          todoId: todoId,
        }),
      });
      const data = await response.json();
      console.log(data);
      location.reload();
    } catch (err) {
      console.log(err);
    }
}
