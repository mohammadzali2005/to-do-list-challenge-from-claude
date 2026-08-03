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

let trashIcons = [];

// All tasks' array
let tasks = [
    
];

let tasksCompletion = {
    done: 0,
    notDone: 0
}

function updateTasksCounter(){
    // showing remaining tasks in notification container
    let remainingTasksCount = document.querySelector('.remaining-tasks');
    remainingTasksCount.innerText = tasksCompletion.notDone;

    // showing done tasks in completion percentage container
    let doneTasksCount = document.querySelector('.done-tasks');
    doneTasksCount.innerText = tasksCompletion.done;

    // showing total tasks in completion percentage container
    let totalTasksCount = document.querySelector('.total-tasks');
    totalTasksCount.innerText = tasksCompletion.done + tasksCompletion.notDone;
}

// showing the tasks
function showTasks(){
    tasksContainer.innerHTML = "";

    for (let i = 0; i < tasks.length; i++){
        tasksContainer.innerHTML += 
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

    tasksCompletion.notDone += 1;
    addInput.value = "";
}

addBtn.addEventListener('click', () => {
    addTask();
    showTasks();
    updateTasksCounter();
});

// removing tasks
tasksContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('task-trash-icon')) {
    const taskDiv = event.target.closest('.task');
    if (taskDiv) {
      taskDiv.remove();

      tasksCompletion.notDone--;

      updateTasksCounter();
    }
  }
});
