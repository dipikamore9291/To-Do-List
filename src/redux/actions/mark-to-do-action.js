export default function markToDo(toDo) {
  return {
    type: "MARK_TO_DO",
    payload: {
      item: toDo.item,
      isDone: !toDo.isDone,
    },
  };
}
