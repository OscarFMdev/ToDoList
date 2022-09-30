import { store, taskArray } from './store.js';

const addObjToLocalStorage = (value) => {
  let indexCounter = 0;
  const object = {
    description: value,
    completed: false,
    index: indexCounter,
  };
  indexCounter += 1;
  taskArray.push(object);
  store();
};

export default addObjToLocalStorage;