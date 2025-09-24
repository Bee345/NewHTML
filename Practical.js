const taskInput = document.getElementById('taskInput');
const addBtn = document.querySelector('.addBtn');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage on page load
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// console.log("Initial tasks:", tasks);

//Render Tasks on page load
renderTasks();


// Add Task
addBtn.addEventListener("click", () => { 
    const text = taskInput.value.trim();
    if (text !== "") {
        tasks.push({ text, completed: false })
        // localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = "";
        saveAndRender();
    }
})

// Mark task as Completed or delete
taskList.addEventListener("click", (e, task) => { 
    const index = e.target.parentElement.dataset.index;

    if (e.target.classList.contains("delete")) {
        tasks.splice(index, 1);
    } else if (e.target.classList.contains("complete")) { 
        tasks[index].completed = !tasks[index].completed;
    }
    saveAndRender();
})

// Save to localStorage and re-render;
function saveAndRender() {  
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Render Tasks
function renderTasks() { 
    taskList.innerHTML = "";
    tasks.forEach((task, index) => { 
        const li = document.createElement("li");
        li.dataset.index = index;
        li.innerHTML = `
            <span class="${task.completed ? "completed" : ""}">${task.text}</span> 
            <button class="complete">${task.completed ? "Undo" : "Complete"}</button>
            <button class="delete">Delete</button>
            
        `;
        taskList.appendChild(li);
    })
}