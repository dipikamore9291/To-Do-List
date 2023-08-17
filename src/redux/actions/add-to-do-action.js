export const addToDo = (todo) => {
  console.log("Inside add to do ...", todo);
  return {
    type: "ADD_TO_DO",
    payload: {
      item: todo,
      isDone: false,
    },
  };
};
