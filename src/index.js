import './style.css';

import './functions.js';
/* Add and remove */
const tasksContainer = document.querySelector('.tasks-container');

const tasks = [
  // {
  //   index: 3,
  //   description: '!!!',
  // },
  // {
  //   index: 1,
  //   description: 'hello',
  // },
  // {
  //   index: 2,
  //   description: 'world',
  // },
];

const createTasks = () => {
  tasks.sort((a, b) => a.index - b.index).map((task) => task.description);
  [...tasks]
    .forEach((task, index) => {
      tasksContainer.innerHTML += `
    <!-- Task -->
    <li class="task index-${index}">
      <div class="left-side">
        <input type="checkbox">
        <p>${task.description}</p>
      </div>
      <i class="fa-solid fa-grip-lines drag"></i>
    </li>
    <hr class="line-separator">
    <!-- Task -->
    `;
    });
};

createTasks();
