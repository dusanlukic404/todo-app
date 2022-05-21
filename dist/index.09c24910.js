"use strict";
const todoInput = document.querySelector(".todo-input");
const todoCheck = document.querySelector(".todo-form .todo-check");
const inputValue = todoInput.value;
const todoList = document.querySelector(".todo-list");
function addTodo() {
    let todo = `<li class="todo-item">
              <input
                type="checkbox"
                class="todo-check"
                name=""
                id=""
                aria-label="Select todo"
              />
              <p class="todo">${inputValue}</p>
              <img
                src="./images/icon-cross.svg"
                alt="Delete todo"
                class="btn-delete-todo"
              />
            </li>`;
    todoList.insertAdjacentHTML("afterbegin", todo);
}
todoInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTodo();
    else return;
});
console.log(3);

//# sourceMappingURL=index.09c24910.js.map
