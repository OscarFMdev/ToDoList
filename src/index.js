import './style.css';
/* index.js */
import displayTasks from './modules/display-tasks.js';
import {
  addTask,
  checkBoxesStatus,
  deleteTask,
  edit,
} from './modules/functions.js';
import { store, taskArray } from './modules/store.js';
// import { restoreIcons } from './modules/icons';

/* Add and remove */
window.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.querySelector('.fa-right-from-bracket');
  addBtn.addEventListener('click', (e) => {
    window.location.reload();
    addTask(e);
  });

  const trashCans = document.querySelectorAll('.delete-icon');
  for (let i = 0; i < trashCans.length; i += 1) {
    trashCans[i].addEventListener('click', (e) => {
      window.location.reload();
      displayTasks();
      deleteTask(e);
    });
  }

  const taskTexts = document.querySelectorAll('p');
  for (let i = 0; i < taskTexts.length; i += 1) {
    taskTexts[i].addEventListener('click', (e) => {
      edit(e);
    });
  }

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
});

const deleteAll = document.querySelector('.reload-icon');
deleteAll.addEventListener('click', () => {
  taskArray.splice(0, taskArray.length);
  store();
  displayTasks();
});

displayTasks();