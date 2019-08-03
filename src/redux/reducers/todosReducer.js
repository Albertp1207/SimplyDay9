import {GET_TODOS_BEGIN,
        GET_TODOS_SUCCESS,
        GET_TODOS_FAIL
    } from "../actions/todosActions"

const initialState = {
    todos: [],
    isLoading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_TODOS_BEGIN:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case GET_TODOS_SUCCESS: 
            return {
                isLoading: false,
                todos: action.payload.todos.todos,
                error: null
            };
        case GET_TODOS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}