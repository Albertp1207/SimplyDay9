import { combineReducers } from "redux";
import switchPageReducer from "./switchPageReducer"
import todosReducer from "./todosReducer";
export default combineReducers({
    switchPageReducer,
    todosReducer
})