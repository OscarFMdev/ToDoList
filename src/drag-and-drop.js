let dragStartIndex;
const dragStart = () => {
  dragStartIndex = this.closest('li');
};
const dragEnter = () => {
  this.classList.add('over');
};
const dragLeave = () => {
  this.classList.remove('over');
};
const dragOver = () => {

};
const dragDrop = () => {

};

export default function dragFeature() {
  const draggables = document.querySelectorAll('.drag');
  const tasks = document.querySelectorAll('.task');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart);
  });

  tasks.forEach((task) => {
    task.addEventListener('dragover', dragOver);
    task.addEventListener('drop', dragDrop);
    task.addEventListener('dragenter', dragEnter);
    task.addEventListener('dragleave', dragLeave);
  });
}