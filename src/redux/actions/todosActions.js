import { getTodos as getTodosFetch } from "../../utils/fetches";

export const GET_TODOS_BEGIN = "GET_TODOS_BEGIN";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAIL = "GET_TODOS_FAIL";

export const getTodosBegin = () => ({
    type: GET_TODOS_BEGIN
})
export const getTodosSuccess = todos => ({
    type: GET_TODOS_SUCCESS,
    payload: {todos}
})
export const getTodosFail = error => ({
    type:GET_TODOS_FAIL,
    payload: {error}
})
export const getTodos = () => dispatch => {
    
    dispatch(getTodosBegin());
    return getTodosFetch()
            .then(res => res.json())
            .then(data => {
                dispatch(getTodosSuccess(data));
            })
            .catch(err => {
                dispatch(getTodosFail(err));
            })
}