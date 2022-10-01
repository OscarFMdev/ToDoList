import displayTasks from './display-tasks.js';
import { changeIcon } from './icons.js';
import addObjToLocalStorage from './objectToLS.js';
import { store, taskArray } from './store.js';

const submit = document.querySelector('.fa-right-from-bracket');
const tasksContainer = document.querySelector('.tasks-container');
const taskName = document.querySelector('.new-task');

const addTask = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('fa-right-from-bracket')) {
    if (!taskName.value) return;
    addObjToLocalStorage(taskName.value);
    taskName.value = '';
    displayTasks();
  }
};

const deleteTask = (e) => {
  if (e.target.classList.contains('delete-icon')) {
    const btn = e.target;
    const removableTask = btn.closest('li');
    const taskIndex = removableTask.dataset.indexNumber;

    // Remove element from array
    taskArray.splice((taskIndex - 1), 1);
    localStorage.setItem('taskInput', taskArray);
    store();
    displayTasks();
  } else {
    changeIcon(e);
  }
};

const edit = (e) => {
  const editableText = e.target;
  const threeDotsIcon = document.querySelector('.fa-solid');
  if (editableText.matches('p')) {
    editableText.setAttribute('contenteditable', 'true');
    editableText.focus();
    threeDotsIcon.classList.add('fa-regular', 'fa-trash-can', 'delete-icon');
  }
};

export {
  addTask,
  edit,
  deleteTask,
  tasksContainer,
  taskName,
  submit,
};