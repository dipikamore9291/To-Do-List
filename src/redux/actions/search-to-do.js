export default function searchToDo(text) {
  return {
    type: "SEARCH_TO_DO",
    payload: text,
  };
}
