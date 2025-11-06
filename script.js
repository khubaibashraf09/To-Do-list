const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const themeBtn = document.getElementById("themeBtn");

// Load saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// Load saved theme
let theme = localStorage.getItem("theme") || "dark";
setTheme(theme);

//  Add task
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const value = taskInput.value.trim();
  if (value === "") return alert("Task cannot be empty!");

  tasks.push({ text: value, completed: false });
  taskInput.value = "";
  saveTasks();
  renderTasks();
}

//  Render tasks on screen
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    li.innerHTML = `
      <span>${task.text}</span>
      <div class="task-btns">
        <button class="complete" onclick="toggleComplete(${index})">✔ Done</button>
        <button class="edit" onclick="editTask(${index})">✎ Edit</button>
        <button class="delete" onclick="deleteTask(${index})">🗑 Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

//  Mark completed / uncompleted
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

//  Edit task
function editTask(index) {
  const updated = prompt("Edit Task", tasks[index].text);
  if (updated !== null && updated.trim() !== "") {
    tasks[index].text = updated;
    saveTasks();
    renderTasks();
  }
}

//  Delete task
function deleteTask(index) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }
}

//  Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//  THEME TOGGLE
themeBtn.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  setTheme(theme);
  localStorage.setItem("theme", theme);
});

function setTheme(mode) {
  if (mode === "light") {
    document.body.classList.add("light");
    themeBtn.textContent = "🌙 Dark Mode";
  } else {
    document.body.classList.remove("light");
    themeBtn.textContent = "☀️ Light Mode";
  }
}
