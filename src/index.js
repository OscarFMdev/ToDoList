import './style.css';
import displayTasks from './modules/display-tasks.js';
import {
  addTask, deleteTask, edit, submit, tasksContainer,
} from './modules/functions.js';

/* Add and remove */

tasksContainer.addEventListener('click', (e) => {
  edit(e);
  deleteTask(e);
});
submit.addEventListener('click', (e) => {
  addTask(e);
});

displayTasks();
