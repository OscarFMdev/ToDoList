import './style.css';
import displayTasks from './modules/display-tasks.js';
import {
  addTask, checkBoxesStatus, deleteTask, edit, submit, tasksContainer,
} from './modules/functions.js';
// import { restoreIcons } from './modules/icons';

/* Add and remove */

tasksContainer.addEventListener('click', (e) => {
  edit(e);
  deleteTask(e);
  checkBoxesStatus(e);
});
submit.addEventListener('click', (e) => {
  addTask(e);
});

displayTasks();
