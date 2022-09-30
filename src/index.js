import './style.css';
import displayTasks from './display-tasks';
import {
  addTask, deleteTask, submit, tasksContainer,
} from './class';
// import dragFeature from './dragAndDrop.js';

/* Add and remove */
tasksContainer.addEventListener('click', deleteTask);
submit.addEventListener('click', addTask);
displayTasks();