const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = () => {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "❌";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}