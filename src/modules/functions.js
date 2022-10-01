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
    taskArray.splice(taskIndex - 1, 1);
    localStorage.setItem('taskInput', taskArray);
    store();
    displayTasks();
  } else {
    changeIcon(e);
  }
};

const edit = (e) => {
  const editableText = e.target;
  const threeDotsIcon = document.querySelectorAll('.editable-icon');
  const editableTask = editableText.closest('li');
  const taskIndex = editableTask.dataset.indexNumber;
  const closestIcon = threeDotsIcon[taskIndex - 1];
  if (editableText.matches('p')) {
    closestIcon.classList.remove(
      'fa-solid',
      'fa-ellipsis-vertical',
      'drag-icon',
    );
    closestIcon.classList.add('fa-regular', 'fa-trash-can', 'delete-icon');
    editableText.setAttribute('contenteditable', 'true');
    editableText.focus();
  }

  // event listener to store the edited value to local storage.
  editableText.addEventListener('blur', () => {
    taskArray[taskIndex - 1].description = editableText.innerText;
    closestIcon.classList.remove('fa-regular', 'fa-trash-can', 'delete-icon');
    closestIcon.classList.add('fa-solid', 'fa-ellipsis-vertical', 'drag-icon');
    store();
  });
};

const checkBoxesStatus = (e) => {
  const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
  const clickLocation = e.target;
  for (let i = 0; i < checkBoxes.length; i += 1) {
    if (clickLocation === checkBoxes[i]) {
      const element = clickLocation.closest('li');
      console.log(element);
    }
  }
};

export {
  addTask,
  edit,
  deleteTask,
  tasksContainer,
  taskName,
  submit,
  checkBoxesStatus,
};