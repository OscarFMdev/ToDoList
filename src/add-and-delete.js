const submit = document.querySelector('.fa-right-from-bracket');
const tasksContainer = document.querySelector('.tasks-container');
const taskName = document.querySelector('.new-task');

const addTask = (e) => {
  if (!e.target.classList.contains('fa-right-from-bracket')) return;

  const taskData = {
    description: taskName.value,
    index: 0,
  };
  localStorage.setItem('taskInput', JSON.stringify(taskData));
};

const savedTaskData = localStorage.getItem('taskInput');
const savedTaskDataToObject = JSON.parse(savedTaskData);

const deleteTask = (e) => {
  if (!e.target.classList.contains('delete-icon')) return;

  const btn = e.target;
  const removableTask = btn.closest('li');
  alert(removableTask.dataset.indexNumber);
};

export {
  addTask,
  deleteTask,
  tasksContainer,
  taskName,
  submit,
  savedTaskDataToObject,
};