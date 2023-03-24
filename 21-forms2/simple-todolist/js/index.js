console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

let headlineInput = "";
let taskInput = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Get user input
  formData = new FormData(e.target);
  formDataEntries = Object.fromEntries(formData);
  console.table(formDataEntries);

  //   List user input
  const todoElement = document.createElement("li");
  const headlineElement = document.createElement("h3");
  headlineElement.textContent = formDataEntries.headline;
  const taskElement = document.createElement("p");
  taskElement.textContent = formDataEntries.task;
  todoElement.append(headlineElement);
  todoElement.append(taskElement);
  todoList.append(todoElement);
  console.log(todoElement);
});
