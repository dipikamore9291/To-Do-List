import { combineReducers } from "redux";
import listReducer from "./list-reducer";

const reducer = combineReducers({
  list: listReducer,
});
export default reducer;
