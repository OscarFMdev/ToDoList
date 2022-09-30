import './style.css';
import displayTasks from './modules/display-tasks';
import {
  addTask, deleteTask, submit, tasksContainer,
} from './modules/class';

/* Add and remove */

tasksContainer.addEventListener('click', deleteTask);
submit.addEventListener('click', addTask);

displayTasks();