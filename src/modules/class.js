import addObjToLocalStorage from './objectToLS.js';
import { store, taskArray } from './store.js';

const submit = document.querySelector('.fa-right-from-bracket');
const tasksContainer = document.querySelector('.tasks-container');
const taskName = document.querySelector('.new-task');

const addTask = (e) => {
  e.preventDefault();
  if (!e.target.classList.contains('fa-right-from-bracket')) return;
  if (!taskName.value) {
    return;
  }
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
  localStorage.setItem('taskInput', taskArray);
  store();
};

export {
  addTask,
  deleteTask,
  tasksContainer,
  taskName,
  submit,
};