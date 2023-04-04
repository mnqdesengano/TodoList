import { setTodoReducer } from "./todoReducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
    allTodos: setTodoReducer,
});

export default reducers;