import { getTodoReducer, setTodoReducer } from "./todoReducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
    allTodos: setTodoReducer,
    getTodo: getTodoReducer,
});

export default reducers;