import { ActionTypes } from "../constants/action-types"

export const setTodos = (todos) => {
    return {
        type: ActionTypes.SET_TODOS,
        payload: todos,
    };
}