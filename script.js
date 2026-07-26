/* Challenge:
Title: To-do list
=> Build a to-do list app where the user can add tasks, mark them as complete, and delete them. All the tasks should be stored in a JavaScript array that drives what's shown on the page.

Requirements
=> - A text input and an "Add" button — typing a task and clicking Add appends it to the list
- Pressing 'Enter' while the input is focused should also add the task
- Each task has a checkbox — checking it strikes through the text and dims it
- Each task has a delete button that removes it from both the array and the page
- If the input is empty and the user tries to add, show a small inline error message instead of adding a blank task
- A counter at the top shows how many tasks are remaining (uncompleted)
*/

const tasksContainer = document.querySelector('.tasks');

const addBtn = document.querySelector('.addNew-btn');
const addInput = document.querySelector('.addNew-input');

// All tasks' array
let tasks = [
    
];

// showing the tasks
function showTasks(){
    for (let i = 0; i <= tasks.length; i++){
        tasksContainer.innerHTML = 
        `<div class="task">
            <input type="radio" class="task-check">
            <h3 class="task-text">${tasks[i].text}</h3>
            <i class="fa-solid fa-trash task-trash-icon"></i>
          </div>`;
    }
}

// adding task
function addTask(){
    tasks.push({
        text: addInput.value
    });
}

function removeTask(){
    
}

addBtn.addEventListener('click', () => {
    addTask();
    showTasks();
});

