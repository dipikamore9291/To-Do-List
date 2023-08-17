const initialState = [
  { item: "item 1", isDone: true },
  { item: "item 2", isDone: false },
  { item: "item 3", isDone: false },
  { item: "item 4", isDone: true },
  { item: "item 5", isDone: false },
];
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      return [...state, action.payload];
    case "MARK_TO_DO":
      const index = state.findIndex(
        (toDo) => toDo.item === action.payload.item
      );
      let arr = [...state];
      arr[index] = action.payload;
      return [...arr];
    case "DELETE_TO_DO":
      return state.filter((toDo) => toDo.item !== action.payload.item);
    case "SELECT_FILTER":
      console.log("State is...", state);
      switch (action.payload) {
        case "active":
          return initialState.filter((toDo) => !toDo.isDone);
        case "completed":
          return initialState.filter((toDo) => toDo.isDone);
        default:
          return initialState;
      }
    case "SEARCH_TO_DO":
      return initialState.filter((toDo) => toDo.item.includes(action.payload));
    default:
      return state;
  }
};
export default listReducer;
