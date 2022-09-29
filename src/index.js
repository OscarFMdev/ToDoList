import './style.css';
import displayTasks from './displayTasks';
import {
  addTask, deleteTask, submit, tasksContainer,
} from './addAndDelete';
// import dragFeature from './dragAndDrop.js';

/* Add and remove */
tasksContainer.addEventListener('click', deleteTask);
submit.addEventListener('click', addTask);
displayTasks();