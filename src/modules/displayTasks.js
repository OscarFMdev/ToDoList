import {
  addTask, checkBoxesStatus, deleteTask, edit,
} from './functions.js';
import { store, taskArray } from './store.js';

const displayTasks = () => {
  const tasksContainer = document.querySelector('.tasks-container');
  tasksContainer.innerHTML = '';
  taskArray.sort((a, b) => a.index - b.index).map((task) => task.description);
  taskArray
    .forEach((task, index) => {
      let box;
      if (task.completed) {
        box = 'checked';
      } else {
        box = '';
      }
      tasksContainer.innerHTML += `
    <!-- Task -->
    <li class="task" data-index-number="${index + 1}">
      <div class="left-side">
        <input class="complete-box" type="checkbox" name="checkbox" value="value" ${box}>
        <label for="checkbox"><p class="editable">${task.description}</p></label>  
      </div>
      <i class="fa-regular fa-trash-can delete-icon" data-index-number="${index + 1}"></i>
    </li>
    <hr class="line-separator">
    <!-- Task -->
    `;
      store();
    });

  /* Add */
  const addBtn = document.querySelector('.fa-right-from-bracket');
  addBtn.addEventListener('click', (e) => {
    addTask(e);
    displayTasks();
  });

  /* Delete */
  const trashCans = document.querySelectorAll('.delete-icon');
  for (let i = 0; i < trashCans.length; i += 1) {
    trashCans[i].addEventListener('click', (e) => {
      deleteTask(e);
      displayTasks();
    });
  }

  /* Delete completed */
  const deleteCompleted = document.querySelector('.completed-text');
  const allCheckBoxes = document.querySelectorAll('input[type=checkbox]');

  function clearCompleted(elem) {
    return elem.completed !== true;
  }

  deleteCompleted.addEventListener('click', () => {
    const data = taskArray.filter(clearCompleted);
    localStorage.setItem('taskInput', JSON.stringify(data));
    window.location.reload();
  });

  for (let i = 0; i < allCheckBoxes.length; i += 1) {
    allCheckBoxes[i].addEventListener('click', (e) => {
      checkBoxesStatus(e);
    });
  }

  /* Edit */
  const taskTexts = document.querySelectorAll('p');
  for (let i = 0; i < taskTexts.length; i += 1) {
    taskTexts[i].addEventListener('click', (e) => {
      edit(e);
    });
  }

  /* Delete all */
  const deleteAll = document.querySelector('.reload-icon');
  deleteAll.addEventListener('click', () => {
    taskArray.splice(0, taskArray.length);
    store();
    displayTasks();
  });
};
// fa-regular  fa-trash-can delete-icon
export default displayTasks;