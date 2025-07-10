let task = [];

function addTask(){
    const taskInput = document.getElementById('task-input');
    const dateInput = document.getElementById('date-input');
     if (taskInput.value === '' || dateInput.value === ''){
        alert('Please fill both filter');
     } else {

     }
}

function displayTask(){
    const taskList = document.getElementById('task-list');
    tasks.array.forEach(element => {
        const taskItem = `
        <div>
            <span class="text-lg"> ${element.task} </span>
        </div>
        `  
    });
}

function deleteTask(){
    const taskIndex = task.findIndex(task => task.id === id)
}

function deleteAllTask(){

}

function filterTask(){

}