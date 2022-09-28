import './style.css';

const tasksContainer = document.querySelector('.tasks-container');

const tasks = [
  {
    index: 3,
    description: '!!!!',
    completed: true,
  },
  {
    index: 1,
    description: 'Hello',
    completed: true,
  },
  {
    index: 2,
    description: 'World',
    completed: true,
  },
];

const createTasks = () => {
  tasks.sort((a, b) => a.index - b.index).map((task) => task.description);
  for (let i = 0; i < tasks.length; i += 1) {
    tasksContainer.innerHTML += `
    <!-- Task -->
    <li class="task index-${tasks[i].index}">
      <div class="left-side">
        <input type="checkbox">
        <p>${tasks[i].description}</p>
      </div>
      <i class="fa-solid fa-ellipsis-vertical dots"></i>
    </li>
    <hr class="line-separator">
    <!-- Task -->
    `;
  }
};

createTasks();