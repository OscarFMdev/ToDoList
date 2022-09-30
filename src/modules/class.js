import addObjToLocalStorage from './objectToLS.js';
import { store, taskArray } from './store.js';

const submit = document.querySelector('.fa-right-from-bracket');
const tasksContainer = document.querySelector('.tasks-container');
const taskName = document.querySelector('.new-task');

const addTask = (e) => {
  e.preventDefault();
  if (!e.target.classList.contains('fa-right-from-bracket')) return;
  addObjToLocalStorage(taskName.value);
  taskName.value = '';
};

const deleteTask = (e) => {
  if (!e.target.classList.contains('delete-icon')) return;

  const btn = e.target;
  const removableTask = btn.closest('li');
  const taskIndex = removableTask.dataset.indexNumber;

  // Remove element from array
  taskArray.splice((taskIndex - 1), 1);
  // Remove from html
  const htmlElement = document.querySelector(`.tasks-container :nth-child(${taskIndex})`);
  const tasksHTML = document.querySelector('.tasks-container');

  tasksHTML.deleteChild(htmlElement);
  store();
};

export {
  addTask,
  deleteTask,
  tasksContainer,
  taskName,
  submit,
};