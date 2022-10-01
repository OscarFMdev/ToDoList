import './style.css';
import displayTasks from './modules/display-tasks';
import {
  addTask, deleteTask, submit, tasksContainer,
} from './modules/class.js';

/* Add and remove */

tasksContainer.addEventListener('click', (e) => {
  deleteTask(e);
  displayTasks();
});
submit.addEventListener('click', (e) => {
  addTask(e);
  displayTasks();
});
displayTasks();
