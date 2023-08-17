export default function deleteToDo(toDo) {
  return {
    type: "DELETE_TO_DO",
    payload: toDo,
  };
}
