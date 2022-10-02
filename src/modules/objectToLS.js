import { store, taskArray } from './store.js';

const addObjToLocalStorage = (value) => {
  const object = {
    description: value,
    completed: false,
    index: taskArray.length + 1,
  };
  taskArray.unshift(object);
  store();
};

export default addObjToLocalStorage;