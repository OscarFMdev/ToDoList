/* Display tasks */

import { store, taskArray } from './store.js';

const displayTasks = () => {
  const tasksContainer = document.querySelector('.tasks-container');
  tasksContainer.innerHTML = '';
  taskArray.sort((a, b) => a.index - b.index).map((task) => task.description);
  taskArray
    .forEach((task, index) => {
      let box;
      if (task.completed) {
        box = 'checked';
      } else {
        box = '';
      }
      tasksContainer.innerHTML += `
    <!-- Task -->
    <li class="task" data-index-number="${index + 1}">
      <div class="left-side">
        <input class="complete-box" type="checkbox" name="checkbox" value="value" ${box}>
        <label for="checkbox"><p class="editable">${task.description}</p></label>  
      </div>
      <i class="fa-regular fa-trash-can delete-icon" data-index-number="${index + 1}"></i>
    </li>
    <hr class="line-separator">
    <!-- Task -->
    `;
      store();
    });
};
// fa-regular  fa-trash-can delete-icon
export default displayTasks;