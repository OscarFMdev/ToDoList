import { store, taskArray } from './store.js';

const displayTasks = () => {
  const tasksContainer = document.querySelector('.tasks-container');
  console.log(taskArray);
  taskArray.sort((a, b) => a.index - b.index).map((task) => task.description);
  taskArray
    .forEach((task, index) => {
      tasksContainer.innerHTML += `
    <!-- Task -->
    <li class="task" data-index-number="${index + 1}">
      <div class="left-side">
        <input class="complete-box" type="checkbox">
        <p>${task.description}</p>
      </div>
      <i class="fa-regular fa-trash-can delete-icon" data-index-number="${index + 1}"></i>
    </li>
    <hr class="line-separator">
    <!-- Task -->
    `;
      store();
    });
  // dragFeature();
};

export default displayTasks;