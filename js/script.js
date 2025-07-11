let tasks = [];
let filterSekarang = "ShowAll";

function addTask() {
    const taskInput = document.getElementById('task-input');
    const dateInput = document.getElementById('date-input');

    if (taskInput.value === '' || dateInput.value === '') {
        alert('Please fill both filter');
    } else {
        const newTask = {
            id: Date.now(),
            task: taskInput.value,
            dueDate: dateInput.value,
            completed: false
        };

        tasks.push(newTask);
        taskInput.value = '';
        dateInput.value = '';
        filterTask();
    }
}

function displayTask(taskArray = tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    if (taskArray.length === 0) {
        taskList.innerHTML = `
        <div class="text-center">
            <p>Task is Empty</p>
        </div>`;
        return;
    }

    taskArray.forEach(element => {
        const taskItem = `
        <section class="flex justify-between items-center p-[8px] border-b gap-[48px]">
            <div class="flex items-center gap-[12px]">
                <span class="text-sm ${element.completed ? 'text-gray-500' : ''}">${element.task}</span>
                <span class="text-sm text-gray-500">${element.dueDate}</span>
            </div>
            <div class="flex justify-between p-[8px] gap-[12px]">
                <select onchange="updateTask(${element.id}, this.value)"
                    class="border-b border rounded p-[4px] ${element.completed ? 'bg-green-500 hover:bg-green-700' : 'bg-blue-500 hove:bg-blue-700'} text-black">
                    <option value="on-going" ${!element.completed ? 'selected' : ''}>On-going</option>
                    <option value="completed" ${element.completed ? 'selected' : ''}>Completed</option>
                </select>
                <button onclick="deleteTask(${element.id})" class="bg-red-500 text-black p-[4px] rounded">Delete</button>
            </div>
        </section>`;
        taskList.innerHTML += taskItem;
    });
}

function deleteTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex != -1) {
        tasks.splice(taskIndex, 1);
        filterTask();
    }
}

function deleteAllTask() {
    tasks = [];
    filterTask();
    console.log('Deleted All Tasks!');
}

function filterTask() {
    const select = document.getElementById('pilih-task').value;
    filterSekarang = select;

    let pilihTask = [];

    if (select === 'completed') {
        pilihTask = tasks.filter(task => task.completed === true);
    } else if (select === 'on-going') {
        pilihTask = tasks.filter(task => task.completed === false);
    } else if (select === 'ShowAll') {
        pilihTask = [...tasks].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }

    displayTask(pilihTask);
}

function updateTask(id, status) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = (status === 'completed');
        filterTask();
    }
}
