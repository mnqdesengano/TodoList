import { ActionTypes } from "../constants/action-types"

const todoInitialState = {
    todos: [
        {
            id: 1,
            todo_name: "Eat breakfast",
            description: "Eat breakfast at 10am",
            isEdit: 0,
            isComplete: 0,
        },
        {
            id: 1,
            todo_name: "Eat lunch",
            description: "Eat lunch at 12pm",
            isEdit: 0,
            isComplete: 0,
        }
    ]
}

export const setTodoReducer = (state = todoInitialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_TODOS:
            return { ...state, todos: payload };
        default:
            return state;
    }
}

export const getTodoReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_TODO:
            return { ...state, ...payload };
        default:
            return state;
    }
}