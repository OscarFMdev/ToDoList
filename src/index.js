import './style.css';
/* index.js */
import displayTasks from './modules/display-tasks.js';
import {
  addTask, checkBoxesStatus, deleteTask, edit, submit, tasksContainer,
} from './modules/functions.js';
import { store, taskArray } from './modules/store';
// import { restoreIcons } from './modules/icons';

/* Add and remove */

tasksContainer.addEventListener('click', (e) => {
  checkBoxesStatus(e);
});

window.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.querySelector('.fa-right-from-bracket');
  addBtn.addEventListener('click', (e) => {
    addTask(e);
  });

  const taskTexts = document.querySelectorAll('p');
  for (let i = 0; i < taskTexts.length; i += 1) {
    taskTexts[i].addEventListener('click', (e) => {
      edit(e);
    });
  }

  const trashCans = document.querySelectorAll('.delete-icon');
  for (let i = 0; i < trashCans.length; i += 1) {
    trashCans[i].addEventListener('click', (e) => {
      deleteTask(e);
    });
  }
});

const deleteCompleted = document.querySelector('.completed-text');

deleteCompleted.addEventListener('click', () => {
  for (let i = 0; i < taskArray.length; i += 1) {
    if (taskArray[i].completed === true) {
      taskArray.splice(i - 1, 1);
      localStorage.setItem('taskInput', taskArray);
      store();
      displayTasks();
    }
  }
});

displayTasks();
