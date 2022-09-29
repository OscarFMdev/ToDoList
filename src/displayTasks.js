const tasksContainer = document.querySelector('.tasks-container');

const tasks = [
  {
    index: 3,
    description: '!!!',
  },
  {
    index: 1,
    description: 'hello',
  },
  {
    index: 2,
    description: 'world',
  },
];

const displayTasks = () => {
  tasks.sort((a, b) => a.index - b.index).map((task) => task.description);
  [...tasks]
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
    });
  // dragFeature();
};

export default displayTasks;