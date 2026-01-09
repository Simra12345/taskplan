const apiUrl = "http://localhost:8080/api/tasks";

function loadTasks() {
    fetch(apiUrl)
        .then(res => res.json())
        .then(tasks => {
            const list = document.getElementById("taskList");
            list.innerHTML = "";

            tasks.forEach(task => {
                const li = document.createElement("li");
                li.innerHTML = `
                    ${task.title} - ${task.description}
                    <button onclick="deleteTask(${task.id})">❌</button>
                `;
                list.appendChild(li);
            });
        });
}

function addTask() {
    const task = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        completed: false
    };

    fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task)
    }).then(() => {
        loadTasks();
    });
}

function deleteTask(id) {
    fetch(`${apiUrl}/${id}`, {
        method: "DELETE"
    }).then(() => {
        loadTasks();
    });
}

loadTasks();
