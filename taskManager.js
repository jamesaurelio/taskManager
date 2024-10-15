const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

function addTask() {
  const taskContent = taskInput.value.trim();

  if (taskContent) {
    const taskNew = document.createElement("li");
    const dateAdded = new Date().toLocaleString();
    taskNew.textContent = `${taskContent} - Added on ${dateAdded}`
    
    createButtons(taskNew)
    taskList.appendChild(taskNew);
    taskInput.value = "";
  }
  else {
    alert("Please enter a task.");
  }
}

function createButtons(taskNew) {
  const editTaskButton = document.createElement("button");
  editTaskButton.classList.add("edit");
  editTaskButton.textContent = "Edit";
  editTaskButton.addEventListener("click", editTask);
  taskNew.appendChild(editTaskButton);
  
  const deleteTaskButton = document.createElement("button");
  deleteTaskButton.textContent = "Delete";
  deleteTaskButton.addEventListener("click", deleteTask);
  taskNew.appendChild(deleteTaskButton);
}

function editTask(event) {
  const taskNew = event.target.parentNode;
  const dateAdded = new Date().toLocaleString();
  const taskContent = taskNew.textContent.split(" - ")[0];
  const editedTaskCont = prompt("Enter new task:", taskContent);
  if (editedTaskCont) {
    taskNew.textContent = `${editedTaskCont} - Edited on ${dateAdded}`;
    createButtons(taskNew);
  }
  else {
    alert("Please enter a task.");
    editTask(event);
  }
}

function deleteTask(event) {
  const taskNew = event.target.parentNode;
  taskList.removeChild(taskNew);
}